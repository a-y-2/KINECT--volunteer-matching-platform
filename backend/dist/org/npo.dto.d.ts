export declare class CreateNpoDto {
    name: string;
    email: string;
    password: string;
    description?: string;
    website?: string;
    locations?: string[];
    mission?: string;
    causes?: string[];
    contactEmail?: string;
    socialMedia?: {
        [key: string]: string;
    };
}
