import { Injectable, UnauthorizedException, ExecutionContext, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';//Base class for creating authentication guards.

@Injectable()
export class NpoAuthGuard extends AuthGuard('jwt') {
  private readonly logger = new Logger(NpoAuthGuard.name);

  //This method is inherited from AuthGuard and is responsible for determining if the request is authorized
  //It takes an ExecutionContext argument which provides information about the current request
  //const request = context.switchToHttp().getRequest(): Extracts the HTTP request object from the context
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    // Log specific request details that are useful for debugging
    this.logger.log(`Incoming request: ${request.method} ${request.url}`);
    this.logger.log(`Request headers: ${JSON.stringify(request.headers)}`);

    // Ensure that user information is attached to the request by the JwtStrategy
    return super.canActivate(context);
  }

  handleRequest(err, npo, info) {
    if (err || !npo) {
      this.logger.error(`JWT validation failed: ${err || 'NPO not authenticated'}`);
      if (info instanceof Error) {
        this.logger.error(`JWT validation error details: ${info.message}`);
      } else {
        this.logger.error(`JWT validation info: ${JSON.stringify(info)}`);
      }
      throw err || new UnauthorizedException();
    }
  
    this.logger.log(`NPO authenticated successfully: ${npo.name} (${npo.id})`);
    return npo;
  }
  
}
