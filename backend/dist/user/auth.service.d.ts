import { UserDocument } from './user.model';
export declare class AuthService {
    private readonly userModel;
    constructor(userModel: any);
    login(email: string, password: string): Promise<UserDocument | string>;
}
