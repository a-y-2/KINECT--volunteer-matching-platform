
import React, {useState} from 'react';
import VolNavbar from './VolNavbar';
import './VolDashboard.css';
import CustomCard from '../../components/card/CustomCard'; // Import the CustomCard component

const VolDashboard = () => {
    // Sample data for testing
    const sampleCardsData = [
        {
            "id": 1,
            "imageUrl": "https://res.cloudinary.com/dktp1ybbx/image/upload/c_limit,h_180,w_180/f_auto,fl_lossy,q_auto/v1692225276/organization/prod/1237949/FmTFS4j6Ua.png",
            "title": "Tutoring Children in Math",
            "description": "We are looking for volunteers to help tutor children in math. This opportunity involves working with elementary school students to improve their math skills.",
            "location": "Mumbai",
            "organisation": "ABC Education Foundation",
            "datePosted": "2024-04-20",
            "schedule": "Flexible schedule",
            "externalUrl": "https://www.volunteermatch.org/search/opp3707154.jsp"
        },
        {
            "id": 2,
            "imageUrl": "https://example.com/image2.jpg",
            "title": "Community Clean-Up Event",
            "description": "Join us for a community clean-up event! Volunteers will work together to clean up parks, streets, and public spaces in our community.",
            "location": "Delhi",
            "organisation": "Green Earth Initiative",
            "datePosted": "2024-04-22",
            "schedule": "Saturday, 9:00 AM - 12:00 PM",
            "externalUrl": "https://example.com/clean-up"
        },
        {
            "id": 3,
            "imageUrl": "https://example.com/image3.jpg",
            "title": "Food Bank Assistance",
            "description": "Volunteers needed to assist at local food banks. Tasks include sorting food donations, stocking shelves, and helping with distribution.",
            "location": "Bangalore",
            "organisation": "Community Food Bank",
            "datePosted": "2024-04-19",
            "schedule": "Weekdays, 10:00 AM - 2:00 PM",
            "externalUrl": "https://example.com/food-bank"
        },
        {
            "id": 4,
            "imageUrl": "https://example.com/image4.jpg",
            "title": "Animal Shelter Caretaker",
            "description": "Help care for animals at our local animal shelter! Volunteers will assist with feeding, cleaning, and providing socialization for animals in need.",
            "location": "Hyderabad",
            "organisation": "Happy Tails Animal Rescue",
            "datePosted": "2024-04-18",
            "schedule": "Daily, 8:00 AM - 4:00 PM",
            "externalUrl": "https://example.com/animal-shelter"
        },
        {
            "id": 5,
            "imageUrl": "https://example.com/image5.jpg",
            "title": "Senior Center Companion",
            "description": "Spend time with seniors at our local senior center! Volunteers will engage in activities, conversation, and provide companionship to seniors.",
            "location": "Chennai",
            "organisation": "Sunshine Senior Care",
            "datePosted": "2024-04-21",
            "schedule": "Weekdays, 2:00 PM - 5:00 PM",
            "externalUrl": "https://example.com/senior-center"
        }
    ];

   // State to manage which content to display
   const [displayContent, setDisplayContent] = useState("cards");

   // Function to handle table click events
   const handleTableClick = (content) => {
       setDisplayContent(content);
   };

   return (
       <div>


           {/* Tables */}
           <div className="tables">
               <table>
                   <thead>
                       <tr>
                           <th onClick={() => handleTableClick("cards")}>Show Cards</th>
                           <th onClick={() => handleTableClick("list")}>Show List</th>
                       </tr>
                   </thead>
               </table>

               {/* Render content based on selection */}
               {displayContent === "cards" ? (
                   <div className="card-grid">
                       {sampleCardsData.map(card => (
                           <CustomCard
                               key={card.id}
                               imageUrl={card.imageUrl}
                               title={card.title}
                               description={card.description}
                               location={card.location}
                               organisation={card.organisation}
                               datePosted={card.datePosted}
                               schedule={card.schedule}
                               externalUrl={card.externalUrl}
                           />
                       ))}
                   </div>
               ) : (
                   <div className="list-content">
                       {/* Render your list content here */}
                       <p>This is the list content.</p>
                   </div>
               )}
           </div>
       </div>
   );
    return (
        <div>          
            {/* Render the cards */}
            <div className="card-grid">
              {sampleCardsData.map(card => (
                <CustomCard
                  key={card.id}
                  imageUrl={card.imageUrl}
                  title={card.title}
                  description={card.description}
                  location={card.location}
                  organisation={card.organisation} // Add organisation
                  datePosted={card.datePosted} // Add datePosted
                  schedule={card.schedule} // Add schedule
                  externalUrl={card.externalUrl} // Pass externalUrl as a prop
                />
              ))}
            </div>
        </div>
    );
};

export default VolDashboard;