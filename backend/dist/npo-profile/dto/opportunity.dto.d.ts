export declare class CreateOpportunityDto {
    title: string;
    description: string;
    skillsRequired: string;
    startDate: Date;
    endDate: Date;
    npoProfile: string;
    location?: string;
    contactEmail?: string;
    website?: string;
}
export declare class UpdateOpportunityDto {
    title?: string;
    description?: string;
    skillsRequired?: string;
    startDate?: Date;
    endDate?: Date;
    location?: string;
    contactEmail?: string;
    website?: string;
}
