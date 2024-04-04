import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector, private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.get('isPublic', context.getHandler());
    if (isPublic) return true;

    const request = context.switchToHttp().getRequest();
    try {
      const authHeader = request.headers.authorization;
      const token = authHeader && authHeader.split(' ')[1];
      if (token) {
        const decoded = await this.jwtService.verify(token); // Verify the JWT (await is now allowed)
        return !!decoded; // Convert to boolean (truthy check)
      } else {
        return false; // No token provided
      }
    } catch (error) {
      return false; // Invalid JWT or other error
    }
  }
}

