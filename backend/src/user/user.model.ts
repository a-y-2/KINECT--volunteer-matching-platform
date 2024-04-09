import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserDocument = User & Document;
@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ type: Date, required: true })
  dob: Date;

  @Prop()
  zipcode: string;

  @Prop()
  city: string;

  @Prop()
  state: string;

  @Prop()
  skills: string[]; // Array of skills the user possesses

  @Prop()
  interests: string[]; // Array of areas the user is interested in volunteering for
}

export const UserSchema = SchemaFactory.createForClass(User);
