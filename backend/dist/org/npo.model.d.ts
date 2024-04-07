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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
export type NpoDocument = Npo & Document;
export declare class Npo {
    name: string;
    password: string;
    description?: string;
    website?: string;
    locations?: string[];
    mission?: string;
    causes?: string[];
    contactEmail?: string;
}
export declare const NpoSchema: import("mongoose").Schema<Npo, import("mongoose").Model<Npo, any, any, any, import("mongoose").Document<unknown, any, Npo> & Npo & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Npo, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Npo>> & import("mongoose").FlatRecord<Npo> & {
    _id: import("mongoose").Types.ObjectId;
}>;