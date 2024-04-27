import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Npo, NpoDocument } from './npo.model';
import { CreateNpoDto } from './npo.dto';
import * as bcrypt from 'bcryptjs';
import { Opportunities, OpportunitiesDocument } from './opportunities.schema';
import { Model, Types } from 'mongoose';
import { CreateOpportunityDto } from './opportunity.dto';

@Injectable()
export class NpoService {
  private readonly logger = new Logger(NpoService.name);
  constructor(@InjectModel(Npo.name) private readonly npoModel: any,
              @InjectModel(Opportunities.name) private readonly opportunitiesModel: any

            ) {} // Inject Npo and opportunity model

  async register(createNpoDto: CreateNpoDto): Promise<NpoDocument> {
    const encryptedPassword = await this.hashPassword(createNpoDto.password);

    // Create Npo object from DTO, excluding password fields (handled separately)
    const npo = await this.create({
      ...createNpoDto,
      password: encryptedPassword,
    });

    return npo;
  }

  async findByName(name: string): Promise<Npo | null> {
    return this.npoModel.findOne({ name }).exec();
  }

  async create(npo: Partial<NpoDocument>): Promise<NpoDocument> {
    const createdNpo = await this.npoModel.create(npo);
    return createdNpo;
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  async findById(id: string): Promise<Npo | null> {
    return this.npoModel.findById(id).exec();
  }

  // Opportunity management methods (assuming Npo has a relationship with Opportunity)

  // async createOpportunity(npoId: string, createOpportunityDto: CreateOpportunityDto): Promise<OpportunitiesDocument> {
  //   // Check if NPO exists
  //   const npo = await this.npoModel.findById(npoId);
  //   if (!npo) {
  //     throw new NotFoundException('NPO not found');
  //   }

  //   // Map DTO properties to Opportunity object
  // const opportunity = new Opportunities({
  //   ...createOpportunityDto,
  //   // npo: npoId, // Set npo field with extracted NPO ID
  // });

  //   // Associate opportunity with NPO by setting npo field
  //   opportunity.npo = npo;

  //   const createdOpportunity = await this.opportunitiesModel.create(opportunity);
  //   return createdOpportunity;
  // }

  async createOpportunity(npoId: string, createOpportunityDto: CreateOpportunityDto): Promise<OpportunitiesDocument> {
    // Check if NPO exists
    try {
      const npo = await this.npoModel.findById(npoId);
      if (!npo) {
        throw new NotFoundException('NPO not found');
      }
  
      this.logger.warn(`NPO with ID ${npoId} found for opportunity creation.`); // Log NPO found for context
  
      // **Optional Type Assertion (if unsure about npo type):**
      const typedNpo = npo as NpoDocument; // Assert npo to be of NpoDocument type
    } catch (error) {
      this.logger.error('Error finding NPO:', error); // Log error details if NPO not found
      throw error; // Re-throw the error for proper handling
    }
  
    // Map DTO properties to Opportunity object
    const opportunity = new Opportunities({
      ...createOpportunityDto,
      npo: npoId,
    });
  
    // Associate opportunity with NPO by setting npo field
  
    try {
      const createdOpportunity = await this.opportunitiesModel.create(opportunity);
      return createdOpportunity;
    } catch (error) {
      this.logger.error('Error creating opportunity:', error); // Log error details on opportunity creation failure
      throw error; // Re-throw the error for proper handling
    }
  }
  


  // async findOpportunitiesByNpo(npoId: string): Promise<OpportunitiesDocument[]> {
  //   return this.opportunitiesModel.find({ npo: npoId }).exec();
  // }
}
