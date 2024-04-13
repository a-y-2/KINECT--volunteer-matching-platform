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
exports.VolunteerController = void 0;
const common_1 = require("@nestjs/common");
const volunteer_service_1 = require("./volunteer.service");
const create_volunteer_profile_dto_1 = require("./create-volunteer-profile.dto");
const update_volunteer_profile_dto_1 = require("./update-volunteer-profile.dto");
let VolunteerController = class VolunteerController {
    constructor(volunteerService) {
        this.volunteerService = volunteerService;
    }
    async createVolunteerProfile(createVolunteerProfileDto, request) {
        const loggedInUserId = request.user.id;
        return await this.volunteerService.createVolunteerProfile(createVolunteerProfileDto, loggedInUserId);
    }
    async getVolunteerProfileById(id) {
        return await this.volunteerService.getVolunteerProfileById(id);
    }
    async updateVolunteerProfileById(id, updateVolunteerProfileDto) {
        return await this.volunteerService.updateVolunteerProfileById(id, updateVolunteerProfileDto);
    }
    async deleteVolunteerProfileById(id) {
        const deleteResponse = await this.volunteerService.deleteVolunteerProfileById(id);
        if (deleteResponse) {
            return { message: 'Volunteer profile deleted successfully' };
        }
        else {
            return { message: 'Volunteer profile deletion failed' };
        }
    }
};
exports.VolunteerController = VolunteerController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_volunteer_profile_dto_1.CreateVolunteerProfileDto, Object]),
    __metadata("design:returntype", Promise)
], VolunteerController.prototype, "createVolunteerProfile", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VolunteerController.prototype, "getVolunteerProfileById", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_volunteer_profile_dto_1.UpdateVolunteerProfileDto]),
    __metadata("design:returntype", Promise)
], VolunteerController.prototype, "updateVolunteerProfileById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VolunteerController.prototype, "deleteVolunteerProfileById", null);
exports.VolunteerController = VolunteerController = __decorate([
    (0, common_1.Controller)('volunteers'),
    __metadata("design:paramtypes", [volunteer_service_1.VolunteerService])
], VolunteerController);
//# sourceMappingURL=volunteer.controller.js.map