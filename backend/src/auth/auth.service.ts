// auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service'; // Import the user service
import { User } from '../user/user.model'; // Assuming User model is defined
import { NpoService } from '../npo/npo.service'; // Import the user service
import { Npo } from '../npo/npo.model'; 

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly npoService: NpoService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findByEmail(email);

    if (user && await user.comparePassword(password)) {
      // User found and password matches, return user
      return user;
    }

    return null; // Invalid credentials
  }

  // async validateNpo(name: string, password: string): Promise<Npo | null> {
  //   const npo = await this.npoService.findByName(name);

  //   if (npo && await npo.comparePassword(password)) {
  //     // User found and password matches, return user
  //     return npo;
  //   }

  //   return null; // Invalid credentials
  // }

  async login(email: string, password: string): Promise<string> {
    const user = await this.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate JWT token with user ID as payload
    const payload = { userId: user.id };
    const token = this.jwtService.sign(payload);

    return token;
  }

  // async login(name: string, password: string): Promise<string> {
  //   const npo = await this.validateNpo(name, password);

  //   if (!npo) {
  //     throw new UnauthorizedException('Invalid credentials');
  //   }

  //   // Generate JWT token with user ID as payload
  //   const payload = { npoId: npo.id };
  //   const token = this.jwtService.sign(payload);

  //   return token;
  // }

  async verifyToken(token: string): Promise<User | null> {
    try {
      const decoded = this.jwtService.verify(token);
      const userId = decoded.userId;

      // Fetch user from database based on userId extracted from token
      const user = await this.userService.findById(userId);

      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      return user;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  async validateUserByJwt(payload: any): Promise<any> {
    const { userId } = payload;
    const user = await this.userService.findById(userId);

    if (!user) {
      throw new UnauthorizedException('Invalid user');
    }

    return user;
  }
}
