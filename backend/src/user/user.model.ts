import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

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

  async comparePassword(candidatePassword: string): Promise<boolean> {
    // Use bcrypt to compare the candidate password with the stored hashed password
    return bcrypt.compare(candidatePassword, this.password);
  }
}

export const UserSchema = SchemaFactory.createForClass(User);
