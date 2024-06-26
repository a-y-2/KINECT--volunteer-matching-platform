import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose'; // Import Types from mongoose
import { Npo} from './npo.model';
import { ObjectId } from 'typeorm';

@Schema()
export class Opportunities extends Document {
  
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  skillsRequired: string; // Comma-separated string of required skills

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  // @Prop({ type:mongoose.Schema.Types.ObjectId,required:true,ref:'Npo' })
  // npo: Npo; // Use Types.ObjectId for reference
  @Prop({required:true})
  npoId : string;

  @Prop({ nullable: true })
  timeCommitment?: string; // Optional time commitment description (e.g., weekly, monthly)

  @Prop({ nullable: true })
  location?: string; // Optional location details (can be virtual or physical)

  @Prop({ nullable: true })
  applicationLink?: string; // Optional link to application form

  @Prop({ nullable: true })
  contactEmail?: string; // Optional contact email for inquiries

  @Prop({ nullable: true })
  website?: string; // Optional website
}

export const OpportunitiesSchema = SchemaFactory.createForClass(Opportunities);
export type OpportunitiesDocument = Opportunities & Document;