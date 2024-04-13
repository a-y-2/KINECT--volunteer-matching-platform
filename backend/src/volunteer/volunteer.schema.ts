import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type VolunteerDocument = Volunteer & Document;

@Schema()
export class Volunteer {
  @Prop({ required: true }) // Mongoose automatically assigns an ID
  _id: string;

  @Prop({ required: true })
  userId: string; // Reference to the user document (for email association)

  @Prop() 
  profilePhoto: string; // URL or path to profile photo

  @Prop({ required: true })
  name: string;

  @Prop()
  phoneNo: string;

  @Prop()
  city: string;

  @Prop()
  state: string;

  @Prop()
  zipcode: string;

  @Prop()
  daysOfWeekAvailable: string[]; // Array of available days

  @Prop()
  skills: string[]; // Array of skills

  @Prop()
  pastExperience: string;

  @Prop()
  motivation: string;

  @Prop()
  certificateLinks: string[]; // Array of links to certificates
}

export const VolunteerSchema = SchemaFactory.createForClass(Volunteer);
