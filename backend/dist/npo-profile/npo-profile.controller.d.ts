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
import { NpoProfileService } from './npo-profile.service';
import { NpoProfile } from './entities/npo-profile.schema';
import { CreateNpoProfileDto } from './dto/create-npo-profile.dto';
import { Model } from 'mongoose';
export declare class NpoProfileController {
    private readonly npoProfileService;
    private readonly npoProfileModel;
    private readonly logger;
    constructor(npoProfileService: NpoProfileService, npoProfileModel: Model<NpoProfile>);
    createNpoProfile(req: any, createNpoProfileDto: CreateNpoProfileDto, loggedInNpoId: string): Promise<NpoProfile>;
    getNpoProfileById(id: string, req: any): Promise<NpoProfile>;
    updateNpoProfileById(req: any, id: string, updateNpoProfileDto: any): Promise<NpoProfile>;
    deleteNpoProfileById(req: any, id: string): Promise<any>;
}
