import { Npo } from './npo.model';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly npoModel;
    private readonly jwtService;
    constructor(npoModel: any, jwtService: JwtService);
    login(name: string, password: string): Promise<{
        token: string;
        message?: string;
    }>;
    validateNpoByJwt(payload: any): Promise<Npo | null>;
}
