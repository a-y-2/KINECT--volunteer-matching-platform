import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { NpoService } from '../npo/npo.service'; // Import the user service
import { Npo } from '../npo/npo.model'; 

@Injectable()
export class NpoAuthService {
  constructor(
    private readonly npoService: NpoService,
    private readonly jwtService: JwtService,
  ) {}

   async validateNpo(name: string, password: string): Promise<Npo | null> {
    const npo = await this.npoService.findByName(name);

    if (npo && npo.comparePassword(password)) {
      // npo found and password matches, return npo
      return npo;
    }

    return null; // Invalid credentials
  }

  async login(name: string, password: string): Promise<string> {
    const npo = await this.validateNpo(name, password);

    if (!npo) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate JWT token with npo ID as payload
    const payload = { npoId: npo.id };
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

  async verifyToken(token: string): Promise<Npo | null> {
    try {
      const decoded = this.jwtService.verify(token);
      const npoId = decoded.npoId;

      // Fetch npo from database based on npoId extracted from token
      const npo = await this.npoService.findById(npoId);

      if (!npo) {
        throw new UnauthorizedException('npo not found');
      }

      return npo;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  async validateNpoByJwt(payload: any): Promise<any> {
    const { npoId } = payload;
    const npo = await this.npoService.findById(npoId);

    if (!npo) {
      throw new UnauthorizedException('Invalid npo');
    }

    return npo;
  }
}
