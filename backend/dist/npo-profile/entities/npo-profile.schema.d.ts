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
import { Npo } from '../../npo/npo.model';
export declare class NpoProfile extends Document {
    npo: Npo;
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
}
export declare const NpoProfileSchema: import("mongoose").Schema<NpoProfile, import("mongoose").Model<NpoProfile, any, any, any, Document<unknown, any, NpoProfile> & NpoProfile & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, NpoProfile, Document<unknown, {}, import("mongoose").FlatRecord<NpoProfile>> & import("mongoose").FlatRecord<NpoProfile> & {
    _id: Types.ObjectId;
}>;
export type NpoProfileDocument = NpoProfile & Document;
