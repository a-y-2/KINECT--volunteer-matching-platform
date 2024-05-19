import { User, UserDocument } from './user.model';
import { CreateUserDto } from './user.dto';
export declare class UserService {
    private readonly userModel;
    private readonly logger;
    getHello(): string;
    constructor(userModel: any);
    register(createUserDto: CreateUserDto): Promise<UserDocument>;
    create(user: Partial<UserDocument>): Promise<UserDocument>;
    private hashPassword;
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
}
