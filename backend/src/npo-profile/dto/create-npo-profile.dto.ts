export class CreateNpoProfileDto {
    npoId: string; // ID of the associated NPO
    name: string;
    description: string;
    location: string;
    website: string;
    contactEmail: string;
    logo?: string;
    missionStatement?: string;
    areasOfFocus?: string;
    foundingYear?: number;
    socialMediaLinks?: string;
    images?: string;
    // opportunities: string[]; // Array of Opportunity IDs
  }
  
