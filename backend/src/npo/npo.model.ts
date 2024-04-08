import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type NpoDocument = Npo & Document;
@Schema()
export class Npo {
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
}

export const NpoSchema = SchemaFactory.createForClass(Npo);
