import { User } from './user.model';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userModel;
    private readonly jwtService;
    private readonly logger;
    constructor(userModel: any, jwtService: JwtService);
    login(email: string, password: string): Promise<{
        token: string;
        message?: string;
    }>;
    validateUserByJwt(payload: any): Promise<User | null>;
}
