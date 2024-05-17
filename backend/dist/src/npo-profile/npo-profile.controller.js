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
const npo_profile_schema_1 = require("./entities/npo-profile.schema");
const create_npo_profile_dto_1 = require("./dto/create-npo-profile.dto");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let NpoProfileController = NpoProfileController_1 = class NpoProfileController {
    constructor(npoProfileService, npoProfileModel) {
        this.npoProfileService = npoProfileService;
        this.npoProfileModel = npoProfileModel;
        this.logger = new common_1.Logger(NpoProfileController_1.name);
    }
    async createNpoProfile(req, createNpoProfileDto, loggedInNpoId) {
        try {
            this.logger.log(`Received request to create npo profile for npo: ${loggedInNpoId}`);
            if (!loggedInNpoId) {
                throw new common_1.BadRequestException('loggedInNpoId is required');
            }
            const npoProfile = await this.npoProfileService.createNpoProfile(createNpoProfileDto, loggedInNpoId);
            this.logger.log(`Npo profile created successfully for npo: ${loggedInNpoId}`);
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
    async updateNpoProfileById(id, updateNpoProfileDto) {
        const npoProfile = await this.npoProfileService.updateNpoProfileById(id, updateNpoProfileDto);
        if (!npoProfile) {
            throw new common_1.NotFoundException('Npo profile not found');
        }
        return npoProfile;
    }
    async deleteNpoProfileById(id) {
        const result = await this.npoProfileService.deleteNpoProfileById(id);
        if (!result) {
            throw new common_1.NotFoundException('Npo profile not found');
        }
        return { message: 'Npo profile deleted successfully' };
    }
};
exports.NpoProfileController = NpoProfileController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Body)('loggedInNpoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_npo_profile_dto_1.CreateNpoProfileDto, String]),
    __metadata("design:returntype", Promise)
], NpoProfileController.prototype, "createNpoProfile", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], NpoProfileController.prototype, "getNpoProfileById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], NpoProfileController.prototype, "updateNpoProfileById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NpoProfileController.prototype, "deleteNpoProfileById", null);
exports.NpoProfileController = NpoProfileController = NpoProfileController_1 = __decorate([
    (0, common_1.Controller)('npo-profile'),
    __param(1, (0, mongoose_2.InjectModel)(npo_profile_schema_1.NpoProfile.name)),
    __metadata("design:paramtypes", [npo_profile_service_1.NpoProfileService,
        mongoose_1.Model])
], NpoProfileController);
//# sourceMappingURL=npo-profile.controller.js.map