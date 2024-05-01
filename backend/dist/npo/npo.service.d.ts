import { Npo, NpoDocument } from './npo.model';
import { CreateNpoDto } from './npo.dto';
import { OpportunitiesDocument } from './opportunities.schema';
import { CreateOpportunityDto } from './opportunity.dto';
export declare class NpoService {
    private readonly npoModel;
    private readonly opportunitiesModel;
    private readonly logger;
    constructor(npoModel: any, opportunitiesModel: any);
    register(createNpoDto: CreateNpoDto): Promise<NpoDocument>;
    findByName(name: string): Promise<Npo | null>;
    create(npo: Partial<NpoDocument>): Promise<NpoDocument>;
    private hashPassword;
    findById(id: string): Promise<Npo | null>;
    isNpo(npoId: string): Promise<string | null | boolean>;
    createOpportunity(npoId: string, createOpportunityDto: CreateOpportunityDto): Promise<OpportunitiesDocument>;
    findAll(): Promise<any[]>;
}
