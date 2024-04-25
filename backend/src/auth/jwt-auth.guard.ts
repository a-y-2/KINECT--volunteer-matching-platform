// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { JwtService } from '@nestjs/jwt';

// @Injectable()
// export class JwtAuthGuard implements CanActivate {
//   constructor(private readonly reflector: Reflector, private readonly jwtService: JwtService) {}

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const isPublic = this.reflector.get('isPublic', context.getHandler());
//     if (isPublic) return true;

//     const request = context.switchToHttp().getRequest();
//     try {
//       const authHeader = request.headers.authorization;
//       const token = authHeader && authHeader.split(' ')[1];
//       if (token) {
//         const decoded = await this.jwtService.verify(token); // Verify the JWT (await is now allowed)
//         return !!decoded; // Convert to boolean (truthy check)
//       } else {
//         return false; // No token provided
//       }
//     } catch (error) {
//       return false; // Invalid JWT or other error
//     }
//   }
// }

// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';

// @Injectable()
// export class JwtAuthGuard extends AuthGuard('jwt') {
//   canActivate(context: ExecutionContext) {
//     const request = context.switchToHttp().getRequest();
//     const user = request.user; // Extracts user information from the request

//     return user; // This will attach the user object to the request
//   }
// }

import { Injectable, UnauthorizedException, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    
    // Ensure that user information is attached to the request by the JwtStrategy
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    // Custom error handling if JWT validation fails
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user; // Attach the authenticated user object to the request
  }
} 
