import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from '../user/user.model'; // Import the User schema

@Schema()
export class UserProfile extends Document {
  @Prop({ type: User, required: true, unique: true })
  user: User;

  @Prop()
  photo: string;

  @Prop()
  phone: string;

  @Prop()
  city: string;

  @Prop()
  state: string;

  @Prop()
  zipcode: string;

  @Prop()
  daysOfWeekAvailable: string[];

  @Prop()
  skills: string[];

  @Prop()
  past: string;

  @Prop()
  motivation: string;

  @Prop()
  certificates: string[];
}

export const UserProfileSchema = SchemaFactory.createForClass(UserProfile);
export type UserProfileDocument = UserProfile & Document;