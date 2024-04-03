import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.model';
import * as bcrypt from 'bcryptjs';

/*
This line decorates the class with @Injectable(). This decorator is from NestJS and marks the class as a service that can be injected 
into other components (controllers, other services) using dependency injection.
*/
@Injectable()
export class AuthService {

  
  //This line defines the constructor of the AuthService class. It injects the user model using dependency injection:
  constructor(@InjectModel(User.name) private readonly userModel: any) {} //This declares a property named userModel

  async login(email: string, password: string): Promise<UserDocument | string> {
    try {
      const user = await this.userModel.findOne({ email });
      if (!user) {
        return 'Invalid email or password';
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return 'Invalid email or password';
      }

      // Exclude sensitive information before returning the user object
      return { ...user._doc, password: undefined }; // Omit password field
      

    } catch (error) {
      console.error('Error during login:', error);
      throw new Error('Internal server error'); // Generic error for client
    }
  }
}