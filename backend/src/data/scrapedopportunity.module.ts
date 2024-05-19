import { Module } from '@nestjs/common';
import { ScrapedOpportunityService } from './scrapedopportunity.service';
import { ScrapedOpportunityController } from './scrapedopportunity.controller';
import { DataSchema, DataDocument } from './scrapedopportunity.schema';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [MongooseModule.forFeature([{ name: 'Data', schema: DataSchema }])],
  providers: [ScrapedOpportunityService],
  exports: [ScrapedOpportunityService],
  controllers: [ScrapedOpportunityController],
})
export class ScrapedOpportunityModule {}
