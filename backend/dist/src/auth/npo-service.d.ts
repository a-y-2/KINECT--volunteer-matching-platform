import { JwtService } from '@nestjs/jwt';
import { NpoService } from '../npo/npo.service';
import { Npo } from '../npo/npo.model';
export declare class NpoAuthService {
    private readonly npoService;
    private readonly jwtService;
    constructor(npoService: NpoService, jwtService: JwtService);
    validateNpo(name: string, password: string): Promise<Npo | null>;
    login(name: string, password: string): Promise<string>;
    verifyToken(token: string): Promise<Npo | null>;
    validateNpoByJwt(payload: any): Promise<any>;
}
