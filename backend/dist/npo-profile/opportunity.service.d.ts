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
import { Model } from 'mongoose';
import { CreateOpportunityDto, UpdateOpportunityDto } from './dto/opportunity.dto';
import { Opportunity, OpportunityDocument } from './entities/opportunity.schema';
export declare class OpportunityService {
    private readonly opportunityModel;
    constructor(opportunityModel: Model<OpportunityDocument>);
    createOpportunity(createOpportunityDto: CreateOpportunityDto): Promise<Opportunity>;
    findAll(): Promise<Opportunity[]>;
    findByNpoProfile(npoProfileId: string): Promise<Opportunity[]>;
    findOne(id: string): Promise<Opportunity | null>;
    update(id: string, updateOpportunityDto: UpdateOpportunityDto): Promise<Opportunity | null>;
    delete(id: string): Promise<Opportunity | null>;
    addOpportunityToNpoProfile(opportunityId: string): Promise<void>;
}
