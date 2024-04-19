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
var NpoProfileController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpoProfileController = void 0;
const common_1 = require("@nestjs/common");
const npo_profile_service_1 = require("./npo-profile.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const create_npo_profile_dto_1 = require("./dto/create-npo-profile.dto");
let NpoProfileController = NpoProfileController_1 = class NpoProfileController {
    constructor(npoProfileService) {
        this.npoProfileService = npoProfileService;
        this.logger = new common_1.Logger(NpoProfileController_1.name);
    }
    async createNpoProfile(req, createNpoProfileDto) {
        try {
            this.logger.log(`Received request to create npo profile: ${JSON.stringify(createNpoProfileDto)}`);
            if (!req.npo) {
                this.logger.warn('Npo not authenticated');
                throw new common_1.NotFoundException('Npo not authenticated');
            }
            const loggedInNpoId = req.npo._id;
            this.logger.log(`Extracted npoId: ${loggedInNpoId}`);
            if (!loggedInNpoId) {
                this.logger.warn('npoId not provided');
                throw new common_1.NotFoundException('npoId not provided');
            }
            const npoProfile = await this.npoProfileService.createNpoProfile(createNpoProfileDto, loggedInNpoId);
            this.logger.log(`Npo profile created successfully`);
            return npoProfile;
        }
        catch (error) {
            this.logger.error(`Error creating npo profile: ${error.message}`);
            throw error;
        }
    }
    async getNpoProfileById(id, req) {
        try {
            const npoProfile = await this.npoProfileService.getNpoProfileById(id);
            if (!npoProfile) {
                this.logger.warn(`Npo profile with ID ${id} not found`);
                throw new common_1.NotFoundException(`Npo profile with ID ${id} not found`);
            }
            this.logger.log(`Npo profile retrieved successfully: ${JSON.stringify(npoProfile)}`);
            return npoProfile;
        }
        catch (error) {
            this.logger.error(`Error retrieving npo profile: ${error.message}`);
            throw error;
        }
    }
    async updateNpoProfileById(req, id, updateNpoProfileDto) {
        const loggedInNpoId = req.npo._id;
        return this.npoProfileService.updateNpoProfileById(id, updateNpoProfileDto, loggedInNpoId);
    }
    async deleteNpoProfileById(req, id) {
        const loggedInNpoId = req.npo.npoId;
        return this.npoProfileService.deleteNpoProfileById(id, loggedInNpoId);
    }
};
exports.NpoProfileController = NpoProfileController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_npo_profile_dto_1.CreateNpoProfileDto]),
    __metadata("design:returntype", Promise)
], NpoProfileController.prototype, "createNpoProfile", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], NpoProfileController.prototype, "getNpoProfileById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], NpoProfileController.prototype, "updateNpoProfileById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], NpoProfileController.prototype, "deleteNpoProfileById", null);
exports.NpoProfileController = NpoProfileController = NpoProfileController_1 = __decorate([
    (0, common_1.Controller)('npo-profile'),
    __metadata("design:paramtypes", [npo_profile_service_1.NpoProfileService])
], NpoProfileController);
//# sourceMappingURL=npo-profile.controller.js.map