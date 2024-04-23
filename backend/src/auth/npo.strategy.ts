import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { NpoAuthService } from './npo-service';

@Injectable()
export class NpoJwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: NpoAuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'abcd', // Specify your JWT secret key here
    });
  }

  async validate(payload: any) {
    const npo = await this.authService.validateNpoByJwt(payload);
    if (!npo) {
      throw new UnauthorizedException('Unauthorized');
    }
    return npo;
  }
}
