import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose'; // Import Types from mongoose
import { Npo } from '../../npo/npo.model';
import { Opportunity, OpportunitySchema } from './opportunity.schema';

@Schema()
export class NpoProfile extends Document {
  @Prop({ type: Npo, required: true, unique: true })
  npo: Npo;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  website: string;

  @Prop({ required: true })
  contactEmail: string;

  @Prop()
  logo?: string; // Optional logo URL

  @Prop()
  missionStatement?: string; // Optional mission statement

  @Prop()
  areasOfFocus?: string; // Optional comma-separated string of focus areas

  @Prop()
  foundingYear?: number; // Optional founding year

  @Prop()
  socialMediaLinks?: string; // Optional JSON string containing social media links

  @Prop()
  images?: string; // Optional comma-separated string of image URLs

  // @Prop({ type: [{ type: Types.ObjectId, ref: 'Opportunity' }] })
  // opportunities: Opportunity[]; // Define opportunities as an array of Opportunity references
}

export const NpoProfileSchema = SchemaFactory.createForClass(NpoProfile);
export type NpoProfileDocument = NpoProfile & Document;

export { Npo };
