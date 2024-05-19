import { IsString, IsArray, IsUrl } from 'class-validator';

export class CreateDataDto {
  @IsString()
  title: string;

  @IsString()
  organization: string;

  @IsString()
  location: string;

  @IsString()
  description: string;

  @IsString()
  datePosted: string;

  @IsArray()
  schedule: string[];

  @IsArray()
  id: string[];

  @IsUrl()
  url: string;
}
