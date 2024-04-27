import { OpportunityService } from './opportunity.service';
import { CreateOpportunityDto, UpdateOpportunityDto } from './dto/opportunity.dto';
export declare class NpoOpportunityController {
    private readonly opportunityService;
    constructor(opportunityService: OpportunityService);
    createOpportunity(createOpportunityDto: CreateOpportunityDto): Promise<import("./entities/opportunity.schema").Opportunity>;
    findAllOpportunities(): Promise<import("./entities/opportunity.schema").Opportunity[]>;
    findOpportunitiesByNpoProfile(npoProfileId: string): Promise<import("./entities/opportunity.schema").Opportunity[]>;
    findOne(id: string): Promise<import("./entities/opportunity.schema").Opportunity>;
    updateOpportunity(id: string, updateOpportunityDto: UpdateOpportunityDto): Promise<import("./entities/opportunity.schema").Opportunity>;
    deleteOpportunity(id: string): Promise<import("./entities/opportunity.schema").Opportunity>;
}
