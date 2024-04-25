import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose'; // Import Types from mongoose
import { NpoProfile } from './npo-profile.schema';

@Schema()
export class Opportunity extends Document {
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

  @Prop({ type: Types.ObjectId, ref: 'NpoProfile' })
  npoProfile: Types.ObjectId; // Use Types.ObjectId for reference

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

export const OpportunitySchema = SchemaFactory.createForClass(Opportunity);
