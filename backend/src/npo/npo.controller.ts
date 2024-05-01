import { BadRequestException, Body, Controller, Post, Req ,Get, NotFoundException} from '@nestjs/common';
import { CreateNpoDto } from './npo.dto';
import { NpoService } from './npo.service';
import { NpoDocument } from './npo.model';
import { CreateOpportunityDto } from './opportunity.dto';
import { Opportunities } from './opportunities.schema';

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
    const npoId = req.body.npoId;   

    const opportunity = await this.npoService.createOpportunity(npoId, createOpportunityDto);
    return opportunity;
  }

  @Get('opportunity')
  async getOpportunities(): Promise<any> {
    
    try {
     // this.logRequestDetails(req, id);

      // Retrieve user profile by ID using the UserProfileService
      const opportunities = await this.npoService.findAll();

      if (!opportunities) {
        
        throw new NotFoundException(`not found`);
      }
      return opportunities;
    } catch (error) {
      
      throw error; 
    }
  }

}
