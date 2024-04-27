import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOpportunityDto, UpdateOpportunityDto } from './dto/opportunity.dto';
import { Opportunity, OpportunityDocument } from './entities/opportunity.schema';

@Injectable()
export class OpportunityService {
  constructor(
    @InjectModel(Opportunity.name) private readonly opportunityModel: Model<OpportunityDocument>,
  ) {}

  async createOpportunity(createOpportunityDto: CreateOpportunityDto): Promise<Opportunity> {
    const newOpportunity = new this.opportunityModel(createOpportunityDto);
    return await newOpportunity.save();
  }

  async findAll(): Promise<Opportunity[]> {
    return await this.opportunityModel.find();
  }

  async findByNpoProfile(npoProfileId: string): Promise<Opportunity[]> {
    return await this.opportunityModel.find({ npoProfile: npoProfileId });
  }

  async findOne(id: string): Promise<Opportunity | null> {
    return await this.opportunityModel.findById(id);
  }

  async update(id: string, updateOpportunityDto: UpdateOpportunityDto): Promise<Opportunity | null> {
    return await this.opportunityModel.findByIdAndUpdate(id, updateOpportunityDto, { new: true }); // Return updated document
  }

  async delete(id: string): Promise<Opportunity | null> {
    return await this.opportunityModel.findByIdAndDelete(id);
  }

  // Optional: Add method to update NpoProfile with new opportunity ID
  async addOpportunityToNpoProfile(opportunityId: string) {
    // Implement logic to find the associated NPO profile
    // and update its "opportunities" array with the new opportunity ID
  }
}
