import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NpoProfileSchema, NpoProfile } from './entities/npo-profile.schema';
import { OpportunitySchema, Opportunity } from './entities/opportunity.schema';
import { NpoProfileService } from './npo-profile.service';
import { OpportunityService } from './opportunity.service';
import { NpoOpportunityController } from './opportunity.controller'; 
import { NpoProfileModule } from './npo-profile.module';
import { Npo, NpoSchema } from 'src/npo/npo.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Npo.name, schema: NpoSchema },
      { name: NpoProfile.name, schema: NpoProfileSchema },
      { name: Opportunity.name, schema: OpportunitySchema },
    ]),
    NpoProfileModule
  ],
  providers: [NpoProfileService, OpportunityService],
  controllers: [NpoOpportunityController],
})
export class NpoOpportunityModule {}
