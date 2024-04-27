import { BadRequestException, Body, Controller, Post, Req } from '@nestjs/common';
import { CreateNpoDto } from './npo.dto';
import { NpoService } from './npo.service';
import { NpoDocument } from './npo.model';
import { CreateOpportunityDto } from './opportunity.dto';

@Controller('npo') // Path for NPO routes
export class NpoController { // Renamed to NpoController
  constructor(private readonly npoService: NpoService) {}

  @Post('register') // Endpoint for NPO registration
  async register(@Body() createNpoDto: CreateNpoDto): Promise<NpoDocument> {
    // Call NpoService's register method with DTO
    const npo = await this.npoService.register(createNpoDto);

    return npo; // Return the created NPO
  }


  @Post('opportunity')
  async createOpportunity(@Body() createOpportunityDto: CreateOpportunityDto, @Req() req) {
    const npoId = req.body.npoId || req.headers['npo-id']; 
    if (!npoId) {
      throw new BadRequestException('Missing NPO ID in request');
    }

    // Validation or checks to ensure a valid NPO is creating the opportunity
    if (!npoId) { 
      throw new BadRequestException('Invalid NPO credentials or authorization');
    }

    const opportunity = await this.npoService.createOpportunity(npoId, createOpportunityDto);
    return opportunity;
  }
}
