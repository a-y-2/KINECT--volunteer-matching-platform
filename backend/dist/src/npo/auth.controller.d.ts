import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: {
        name: string;
        password: string;
    }): Promise<{
        token: string;
        message?: string;
    }>;
}
