const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the webpage
  await page.goto('https://www.volunteermatch.org/search/?v=true&onloc=false');

  // Wait for the list of card components to load
  await page.waitForSelector('.pub-srp-opps__opp');

  // Extract data from each card component
  const cardData = await page.evaluate(() => {
    const cardElements = document.querySelectorAll('.pub-srp-opps__opp');
    const data = [];

    cardElements.forEach(card => {
      const title = card.querySelector('h3 > a > span').innerText.trim();
      const organization = card.querySelector('.pub-srp-opps__org > a').innerText.trim();
      const location = card.querySelector('.pub-srp-opps__info > .pub-srp-opps__loc').innerText.trim();
      const description = card.querySelector('.pub-srp-opps__desc').innerText.trim();
      const datePosted = card.querySelector('.pub-srp-opps__posted').innerText.trim();
      const schedule = card.querySelector('.pub-srp-opps__info > .pub-srp-opps__date').innerText.trim();
      const id = card.getAttribute('id');
      const url = `https://www.volunteermatch.org/search/${id}.jsp`;

      data.push({ title, organization, location, description, datePosted, schedule, url });
    });

    return data;
  });

  // Close the initial page since we don't need it anymore
  await page.close();

  // Loop through each card data to fetch image URL
  for (const entry of cardData) {
    const pageForImg = await browser.newPage();
    await pageForImg.goto(entry.url);

    // Extract image URL from the page
    const imageUrl = await pageForImg.evaluate(() => {
      const imgElement = document.querySelector('.image img');
      return imgElement ? imgElement.src : null;
    });

    // Add image URL to the entry in cardData
    entry.imageUrl = imageUrl;

    // Close the page for image since we have extracted the data we need
    await pageForImg.close();
  }

  // Save data to a JSON file
  fs.writeFileSync('cardData.json', JSON.stringify(cardData, null, 2), 'utf-8');

  console.log('Data saved to cardData.json');

  await browser.close();
})();
