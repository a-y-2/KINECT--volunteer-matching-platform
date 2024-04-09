import { UserDocument } from './user.model';
import { CreateUserDto } from './user.dto';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: any);
    register(createUserDto: CreateUserDto): Promise<UserDocument>;
    create(user: Partial<UserDocument>): Promise<UserDocument>;
    private hashPassword;
}
