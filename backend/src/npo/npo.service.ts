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
  [x: string]: any;
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

  async isNpo(npoId: string): Promise<string | null | boolean> {
    try {
      const document = await this.npoModel.findOne({ 'npo._id': npoId });

      if (document) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      // Handle any errors (e.g., database connection issues, query errors)
      console.error('Error occurred while querying npo collection:', error);
      throw error; // Optionally rethrow the error for the caller to handle
    }
  }


  async createOpportunity(npoId: string, createOpportunityDto: CreateOpportunityDto): Promise<OpportunitiesDocument> {
    // Check if NPO exists
    
    const isnpo = await this.isNpo(npoId);
    if(!isnpo){
      console.error('npo not found');
    }
    else{
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
  
    
  }
  


  // async findOpportunitiesByNpo(npoId: string): Promise<OpportunitiesDocument[]> {
  //   return this.opportunitiesModel.find({ npo: npoId }).exec();
  // }

  async findAll(): Promise<any[]> {
    try {
      const documents = await this.opportunitiesModel.find().exec();
      return documents;
    } catch (error) {
      console.error('Error occurred while fetching all documents:', error);
      throw error;
    }
  }




}
