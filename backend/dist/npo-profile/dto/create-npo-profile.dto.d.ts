export declare class CreateNpoProfileDto {
    readonly npo: string;
    readonly name: string;
    readonly description: string;
    readonly location: string;
    readonly website: string;
    readonly contactEmail: string;
    readonly logo?: string;
    readonly missionStatement?: string;
    readonly areasOfFocus?: string;
    readonly foundingYear?: number;
    readonly socialMediaLinks?: string;
    readonly images?: string;
    readonly opportunities: string[];
}
