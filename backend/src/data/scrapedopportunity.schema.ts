import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Data extends Document {

  @Prop()
  title: string;

  @Prop()
  organization: string;

  @Prop()
  location: string;

  @Prop()
  description: string;

  @Prop()
  datePosted: string;

  @Prop()
  schedule: string[];

  @Prop()
  id: string[];

  @Prop()
  url: string;
}

export const DataSchema = SchemaFactory.createForClass(Data);
export type DataDocument = Data & Document;
