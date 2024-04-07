import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateNpoDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string; // Consider using a dedicated password confirmation field for enhanced security

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  website?: string;

  @IsOptional()
  @IsString({ each: true }) // Validate each item in the array
  locations?: string[];

  @IsOptional()
  @IsString()
  mission?: string;

  @IsOptional()
  @IsString({ each: true })
  causes?: string[];

  @IsOptional()
  @IsString()
  @IsEmail()
  contactEmail?: string;

  @IsOptional()
  socialMedia?: { [key: string]: string }; // Object for social media links
}
