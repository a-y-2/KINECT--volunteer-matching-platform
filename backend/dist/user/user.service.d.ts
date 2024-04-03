import { UserDocument } from './user.model';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: any);
    register(email: string, password: string, firstName: string, lastName: string, skills: string[], interests: string[]): Promise<UserDocument>;
    create(user: Partial<UserDocument>): Promise<UserDocument>;
    private hashPassword;
}
