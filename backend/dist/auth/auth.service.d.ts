import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';
import { NpoService } from '../npo/npo.service';
export declare class AuthService {
    private readonly userService;
    private readonly npoService;
    private readonly jwtService;
    constructor(userService: UserService, npoService: NpoService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<User | null>;
    login(email: string, password: string): Promise<string>;
    verifyToken(token: string): Promise<User | null>;
    validateUserByJwt(payload: any): Promise<any>;
}
