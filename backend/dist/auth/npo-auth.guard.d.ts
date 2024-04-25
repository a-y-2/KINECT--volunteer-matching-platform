import { ExecutionContext } from '@nestjs/common';
declare const NpoAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class NpoAuthGuard extends NpoAuthGuard_base {
    private readonly logger;
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | import("rxjs").Observable<boolean>;
    handleRequest(err: any, npo: any, info: any): any;
}
export {};
