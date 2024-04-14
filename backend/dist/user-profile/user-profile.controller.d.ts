import { UserProfileService } from './user-profile.service';
import { UserProfile } from './user-profile.schema';
import { CreateUserProfileDto } from './user-profile.dto';
export declare class UserProfileController {
    private readonly userProfileService;
    constructor(userProfileService: UserProfileService);
    createUserProfile(req: any, createUserProfileDto: CreateUserProfileDto): Promise<UserProfile>;
    getUserProfileById(id: string): Promise<UserProfile>;
    updateUserProfileById(req: any, id: string, updateUserProfileDto: any): Promise<UserProfile>;
    deleteUserProfileById(req: any, id: string): Promise<any>;
}
