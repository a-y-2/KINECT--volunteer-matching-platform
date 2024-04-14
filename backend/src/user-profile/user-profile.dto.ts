export class CreateUserProfileDto {
    userId: string; // Replace with user ID type if different from string
    photo?: string; // Optional property
    phone?: string;
    city?: string;
    state?: string;
    zipcode?: string;
    daysOfWeekAvailable?: string[];
    skills?: string[];
    past?: string;
    motivation?: string;
    certificates?: string[];
  }
  