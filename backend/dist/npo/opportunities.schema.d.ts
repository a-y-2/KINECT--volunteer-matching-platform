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
import mongoose, { Document, Types } from 'mongoose';
import { Npo } from './npo.model';
export declare class Opportunities extends Document {
    title: string;
    description: string;
    skillsRequired: string;
    startDate: Date;
    endDate: Date;
    npo: Npo;
    timeCommitment?: string;
    location?: string;
    applicationLink?: string;
    contactEmail?: string;
    website?: string;
}
export declare const OpportunitiesSchema: mongoose.Schema<Opportunities, mongoose.Model<Opportunities, any, any, any, mongoose.Document<unknown, any, Opportunities> & Opportunities & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Opportunities, mongoose.Document<unknown, {}, mongoose.FlatRecord<Opportunities>> & mongoose.FlatRecord<Opportunities> & {
    _id: Types.ObjectId;
}>;
export type OpportunitiesDocument = Opportunities & Document;
