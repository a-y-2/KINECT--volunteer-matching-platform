import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<User | null>;
    login(email: string, password: string): Promise<string>;
    verifyToken(token: string): Promise<User | null>;
    validateUserByJwt(payload: any): Promise<any>;
}
