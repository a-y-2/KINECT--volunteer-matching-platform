import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { OpportunityService } from './opportunity.service';
import { CreateOpportunityDto, UpdateOpportunityDto } from './dto/opportunity.dto';

@Controller('npo-opportunities')
export class NpoOpportunityController {
  constructor(private readonly opportunityService: OpportunityService) {}

  // Create a new opportunity
  @Post()
  async createOpportunity(@Body() createOpportunityDto: CreateOpportunityDto) {
    return await this.opportunityService.createOpportunity(createOpportunityDto);
  }

  // Get all opportunities (consider adding pagination if needed)
  @Get()
  async findAllOpportunities() {
    return await this.opportunityService.findAll();
  }

  // Get opportunities associated with a specific NPO profile
  @Get(':npoProfileId/opportunities')
  async findOpportunitiesByNpoProfile(@Param('npoProfileId') npoProfileId: string) {
    return await this.opportunityService.findByNpoProfile(npoProfileId);
  }

  // Get a single opportunity by ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.opportunityService.findOne(id);
  }

  // Update an existing opportunity
  @Put(':id')
  async updateOpportunity(
    @Param('id') id: string,
    @Body() updateOpportunityDto: UpdateOpportunityDto,
  ) {
    return await this.opportunityService.update(id, updateOpportunityDto);
  }

  // Delete an opportunity
  @Delete(':id')
  async deleteOpportunity(@Param('id') id: string) {
    return await this.opportunityService.delete(id);
  }
}
