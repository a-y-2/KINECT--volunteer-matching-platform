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
import { Document, Types } from 'mongoose';
export declare class Opportunity extends Document {
    title: string;
    description: string;
    skillsRequired: string;
    startDate: Date;
    endDate: Date;
    npoProfile: Types.ObjectId;
    timeCommitment?: string;
    location?: string;
    applicationLink?: string;
    contactEmail?: string;
    website?: string;
}
export declare const OpportunitySchema: import("mongoose").Schema<Opportunity, import("mongoose").Model<Opportunity, any, any, any, Document<unknown, any, Opportunity> & Opportunity & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Opportunity, Document<unknown, {}, import("mongoose").FlatRecord<Opportunity>> & import("mongoose").FlatRecord<Opportunity> & {
    _id: Types.ObjectId;
}>;
