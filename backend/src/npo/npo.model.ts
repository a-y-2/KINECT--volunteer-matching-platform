import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';


export type NpoDocument = Npo & Document;
@Schema()
export class Npo extends Document{
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  description?: string;

  @Prop()
  website?: string; // Consider using an array for multiple websites

  @Prop({ type: [String] })
  locations?: string[]; 

  @Prop()
  mission?: string;

  @Prop({ type: [String] })
  causes?: string[];

  @Prop()
  contactEmail?: string;

  // @Prop()
  // socialMedia?: { [key: string]: string }; // Object for social media links (platform: URL)
  // async comparePassword(candidatePassword: string): Promise<boolean> {
  //   // Use bcrypt to compare the candidate password with the stored hashed password
  //   return bcrypt.compare(candidatePassword, this.password);
  // }
}

export const NpoSchema = SchemaFactory.createForClass(Npo);
