import { NpoAuthService } from './npo-service';
declare const NpoJwtStrategy_base: new (...args: any[]) => any;
export declare class NpoJwtStrategy extends NpoJwtStrategy_base {
    private readonly authService;
    constructor(authService: NpoAuthService);
    validate(payload: any): Promise<any>;
}
export {};
