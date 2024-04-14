// // jwt.strategy.ts
// import { Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { AuthService } from './auth.service';
// import { JwtPayload } from './interfaces/jwt-payload.interface';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(private readonly authService: AuthService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: 'abcd', // Replace with your JWT secret key
//     });
//   }

//   async validate(payload: JwtPayload) {
//     const user = await this.authService.validateUserByJwt(payload);
//     if (!user) {
//       // Optional: Handle invalid/expired tokens
//       // Example: throw new UnauthorizedException('Invalid token');
//     }
//     return user;
//   }
// }
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your_jwt_secret', // Specify your JWT secret key here
    });
  }

  async validate(payload: any) {
    const user = await this.authService.validateUserByJwt(payload);
    if (!user) {
      throw new UnauthorizedException('Unauthorized');
    }
    return user;
  }
}
