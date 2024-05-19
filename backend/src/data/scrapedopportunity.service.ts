import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import puppeteer from 'puppeteer';
import { InjectModel } from '@nestjs/mongoose';
import { Data, DataDocument } from './scrapedopportunity.schema';
import { Model } from 'mongoose';

@Injectable()
export class ScrapedOpportunityService {
  constructor(@InjectModel('Data') private readonly dataModel: Model<'Data'>) {}

  private jsonData: any[] = [];

  paginateData(filePath: string, page: number, pageSize: number): any[] {
    // Read the JSON file and parse the data
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const jsonData: any[] = JSON.parse(fileContent);

    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, jsonData.length);
    return jsonData.slice(startIndex, endIndex);
  }



  async scrapeAndSaveData(): Promise<any[]> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    try {
      // Navigate to the webpage
      await page.goto('https://www.volunteermatch.org/search/?v=true&onloc=false');
  
      // Wait for the list of card components to load
      await page.waitForSelector('.pub-srp-opps__opp');
  
      // Extract data from each card component
      const cardData = await page.evaluate(() => {
        const cardElements = document.querySelectorAll('.pub-srp-opps__opp');
        const data = [];
  
        cardElements.forEach((card: any) => {
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
        console.log(data);
        return data;
      });
  
      // Loop through each card data to fetch image URL
      for (const entry of cardData) {
        console.log(cardData);
        const pageForImg = await browser.newPage();
        await pageForImg.goto(entry.url);
  
        // Extract image URL from the page
        const imageUrl = await pageForImg.evaluate(() => {
          const imgElement = document.querySelector('.image img') as HTMLImageElement;
          return imgElement ? imgElement.src : null;
        });
  
        entry.imageUrl = imageUrl;
  
        await pageForImg.close();
      }
  
      console.log(__dirname);
      console.log('card data: ', cardData);
      return cardData; // Return the scraped data
    } catch (error) {
      console.error('Error scraping and saving data:', error);
      return []; // Return an empty array in case of error
    } finally {
      await browser.close();
    }
  }

  async createDataFromCard(cardData: Data[]): Promise<Data[]> {
    const createdData: Data[] = [];
    for (const data of cardData) {
      const createdItem = await this.dataModel.create(data) as unknown as Data;
      createdData.push(createdItem);
    }
    return createdData;
  }
  
}


