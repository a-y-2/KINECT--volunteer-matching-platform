import { UserProfileService } from './user-profile.service';
import { UserProfile } from './user-profile.schema';
import { CreateUserProfileDto } from './user-profile.dto';
export declare class UserProfileController {
    private readonly userProfileService;
    private readonly logger;
    constructor(userProfileService: UserProfileService);
    createUserProfile(req: any, createUserProfileDto: CreateUserProfileDto): Promise<UserProfile>;
    getUserProfileById(id: string, req: any): Promise<UserProfile>;
    private logRequestDetails;
    updateUserProfileById(req: any, id: string, updateUserProfileDto: any): Promise<UserProfile>;
    deleteUserProfileById(req: any, id: string): Promise<any>;
}
