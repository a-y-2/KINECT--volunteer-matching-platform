/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document, ObjectId } from 'mongoose';
export type VolunteerDocument = Volunteer & Document;
export declare class Volunteer {
    _id: string;
    userId: ObjectId;
    profilePhoto: string;
    name: string;
    phoneNo: string;
    city: string;
    state: string;
    zipcode: string;
    daysOfWeekAvailable: string[];
    skills: string[];
    pastExperience: string;
    motivation: string;
    certificateLinks: string[];
}
export declare const VolunteerSchema: import("mongoose").Schema<Volunteer, import("mongoose").Model<Volunteer, any, any, any, Document<unknown, any, Volunteer> & Volunteer & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Volunteer, Document<unknown, {}, import("mongoose").FlatRecord<Volunteer>> & import("mongoose").FlatRecord<Volunteer> & Required<{
    _id: string;
}>>;
