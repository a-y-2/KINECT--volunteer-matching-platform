import { IsNotEmpty, IsString, IsDateString, IsOptional } from 'class-validator';

export class CreateOpportunityDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  npoId: string;

  // @IsNotEmpty()
  // @IsString()
  // description: string;

  // @IsNotEmpty()
  // @IsString()
  // skillsRequired: string;

  // @IsNotEmpty()
  // @IsDateString()
  // startDate: Date;

  // @IsNotEmpty()
  // @IsDateString()
  // endDate: Date;

  // @IsNotEmpty()
  // @IsString()
  // npoProfile: string;

  // @IsOptional()
  // @IsString()
  // location?: string;

  // @IsOptional()
  // @IsString()
  // contactEmail?: string;

  // @IsOptional()
  // @IsString()
  // website?: string;
}