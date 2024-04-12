export class CreateVolunteerProfileDto {
    userId: string; //obtain this during user registration/login)
    profilePhoto?: string; //profile photo URL/path
    name: string;
    phoneNo?: string;
    city?: string;
    state?: string;
    zipcode?: string;
    daysOfWeekAvailable?: string[];
    skills?: string[];
    pastExperience?: string;
    motivation?: string;
    certificateLinks?: string[];
  }
  
 
  