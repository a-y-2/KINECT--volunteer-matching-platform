import { CreateNpoDto } from './npo.dto';
import { NpoService } from './npo.service';
import { NpoDocument } from './npo.model';
import { CreateOpportunityDto } from './opportunity.dto';
export declare class NpoController {
    private readonly npoService;
    constructor(npoService: NpoService);
    register(createNpoDto: CreateNpoDto): Promise<NpoDocument>;
    createOpportunity(createOpportunityDto: CreateOpportunityDto, req: any): Promise<import("./opportunities.schema").OpportunitiesDocument>;
    getOpportunities(): Promise<any>;
}
