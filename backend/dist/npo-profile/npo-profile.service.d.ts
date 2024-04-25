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
import { NpoProfile, NpoProfileDocument } from './entities/npo-profile.schema';
import { NpoDocument } from '../npo/npo.model';
import mongoose from 'mongoose';
import { CreateNpoProfileDto } from './dto/create-npo-profile.dto';
export declare class NpoProfileService {
    private readonly npoProfileModel;
    private readonly npoModel;
    private readonly logger;
    constructor(npoProfileModel: mongoose.Model<NpoProfileDocument>, npoModel: mongoose.Model<NpoDocument>);
    createNpoProfile(createNpoProfileDto: CreateNpoProfileDto, loggedInNpoId: string): Promise<NpoProfile>;
    getNpoProfileById(id: string): Promise<NpoProfileDocument>;
    updateNpoProfileById(id: string, updateNpoProfileDto: any, loggedInNpoId: string): Promise<NpoProfile | null>;
    deleteNpoProfileById(id: string, loggedInNpoId: string): Promise<any>;
}
