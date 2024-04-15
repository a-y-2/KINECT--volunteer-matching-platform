"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_profile_schema_1 = require("./user-profile.schema");
const user_model_1 = require("../user/user.model");
const common_2 = require("@nestjs/common");
const mongoose_2 = require("mongoose");
let UserProfileService = class UserProfileService {
    constructor(userProfileModel, userModel) {
        this.userProfileModel = userProfileModel;
        this.userModel = userModel;
    }
    async createUserProfile(createUserProfileDto, loggedInUserId) {
        const user = await this.userModel.findById(loggedInUserId);
        if (!user) {
            throw new common_2.NotFoundException('User not found');
        }
        const newUserProfile = new this.userProfileModel({
            ...createUserProfileDto,
            user: user,
        });
        return await newUserProfile.save();
    }
    async getUserProfileById(id) {
        if (!mongoose_2.Types.ObjectId.isValid(id))
            throw new common_1.BadRequestException('Invalid user ID.');
        const user = await this.userProfileModel.findById(id);
        if (!user)
            throw new common_2.NotFoundException('User not found.');
        return user;
    }
    async updateUserProfileById(id, updateUserProfileDto, loggedInUserId) {
        const userProfile = await this.userProfileModel.findById(id);
        if (!userProfile) {
            throw new common_2.NotFoundException('User profile not found');
        }
        if (userProfile.user._id.toString() !== loggedInUserId) {
            throw new common_1.UnauthorizedException('Unauthorized access');
        }
        const allowedUpdates = ['photo', 'phone', 'city', 'state', 'zipcode', 'daysOfWeekAvailable', 'skills', 'past', 'motivation', 'certificates'];
        const update = Object.keys(updateUserProfileDto)
            .filter((key) => allowedUpdates.includes(key))
            .reduce((acc, key) => ({ ...acc, [key]: updateUserProfileDto[key] }), {});
        return await this.userProfileModel.findByIdAndUpdate(id, update, { new: true });
    }
    async deleteUserProfileById(id, loggedInUserId) {
        const deletedProfile = await this.userProfileModel.findByIdAndDelete(id);
        if (!deletedProfile) {
            throw new common_2.NotFoundException('User profile not found');
        }
        return { message: 'User profile deleted successfully' };
    }
};
exports.UserProfileService = UserProfileService;
exports.UserProfileService = UserProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_profile_schema_1.UserProfile.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_model_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model, mongoose_2.default.Model])
], UserProfileService);
//# sourceMappingURL=user-profile.service.js.map