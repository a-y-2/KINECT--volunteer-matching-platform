import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6, { message: 'Password is too short.' })
  password: string;

  @IsString()
  firstName?: string; 

  @IsString()
  lastName?: string;

  @IsString()
  zipcode?: string;

  @IsString()
  city?: string;

  @IsString()
  state?: string;

  @IsString()
  dob?: Date;

  @IsString({ each: true }) 
  skills?: string[];

  @IsString({ each: true })
  interests?: string[];
}
