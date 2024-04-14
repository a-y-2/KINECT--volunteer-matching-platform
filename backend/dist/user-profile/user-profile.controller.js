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
exports.UserProfileController = void 0;
const common_1 = require("@nestjs/common");
const user_profile_service_1 = require("./user-profile.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const user_profile_dto_1 = require("./user-profile.dto");
let UserProfileController = class UserProfileController {
    constructor(userProfileService) {
        this.userProfileService = userProfileService;
    }
    async createUserProfile(req, createUserProfileDto) {
        try {
            if (!req.user || !req.user.userId) {
                throw new common_1.NotFoundException('User not authenticated or userId not provided');
            }
            const loggedInUserId = req.user.userId;
            const userProfile = await this.userProfileService.createUserProfile(createUserProfileDto, loggedInUserId);
            return userProfile;
        }
        catch (error) {
            console.error('Error creating user profile:', error);
            throw error;
        }
    }
    async getUserProfileById(id) {
        return this.userProfileService.getUserProfileById(id);
    }
    async updateUserProfileById(req, id, updateUserProfileDto) {
        const loggedInUserId = req.user.userId;
        return this.userProfileService.updateUserProfileById(id, updateUserProfileDto, loggedInUserId);
    }
    async deleteUserProfileById(req, id) {
        const loggedInUserId = req.user.userId;
        return this.userProfileService.deleteUserProfileById(id, loggedInUserId);
    }
};
exports.UserProfileController = UserProfileController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_profile_dto_1.CreateUserProfileDto]),
    __metadata("design:returntype", Promise)
], UserProfileController.prototype, "createUserProfile", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserProfileController.prototype, "getUserProfileById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], UserProfileController.prototype, "updateUserProfileById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserProfileController.prototype, "deleteUserProfileById", null);
exports.UserProfileController = UserProfileController = __decorate([
    (0, common_1.Controller)('user-profile'),
    __metadata("design:paramtypes", [user_profile_service_1.UserProfileService])
], UserProfileController);
//# sourceMappingURL=user-profile.controller.js.map