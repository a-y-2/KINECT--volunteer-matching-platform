import { CreateUserDto } from './user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register({ email, password, firstName, lastName, skills, interests }: CreateUserDto, session: any): Promise<import("./user.model").UserDocument>;
}
