import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.model';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt'; // Import JwtService
import { PassportStrategy } from '@nestjs/passport'; // Import PassportStrategy
import { ExtractJwt, Strategy } from 'passport-jwt'; // Import JWT strategy utilities


/*
This line decorates the class with @Injectable(). This decorator is from NestJS and marks the class as a service that can be injected 
into other components (controllers, other services) using dependency injection.
*/
@Injectable()
export class AuthService {

  //
  //This line defines the constructor of the AuthService class. It injects the user model and jwtservice using dependency injection:
  constructor(@InjectModel(User.name) private readonly userModel: any,
  private readonly jwtService: JwtService) {} //This declares a property named userModel and jwtService 

  async login(email: string, password: string):  Promise<{ token: string; message?: string }> {
    try {
      const user = await this.userModel.findOne({ email });
      if (!user) {
        return { token: null, message: 'Invalid email or password' };
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return { token: null, message: 'Invalid email or password' };
      }

    const payload = { userId: user._id };
    const token = await this.jwtService.sign(payload);
    return { token };

  } catch (error) {
    console.error('Error during login:', error);
    throw new Error('Internal server error');
  }  
}

  async validateUserByJwt(payload: any): Promise<User | null> {
    const userId = payload.userId;
    const user = await this.userModel.findById(userId);
    return user;
  }


}

