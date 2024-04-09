import { CreateUserDto } from './user.dto';
import { UserService } from './user.service';
import { UserDocument } from './user.model';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register(createUserDto: CreateUserDto): Promise<UserDocument>;
}
