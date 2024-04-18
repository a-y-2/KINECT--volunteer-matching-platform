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
exports.NpoProfileController = void 0;
const common_1 = require("@nestjs/common");
const npo_profile_service_1 = require("./npo-profile.service");
const create_npo_profile_dto_1 = require("./dto/create-npo-profile.dto");
const update_npo_profile_dto_1 = require("./dto/update-npo-profile.dto");
let NpoProfileController = class NpoProfileController {
    constructor(npoProfileService) {
        this.npoProfileService = npoProfileService;
    }
    create(createNpoProfileDto) {
        return this.npoProfileService.create(createNpoProfileDto);
    }
    findAll() {
        return this.npoProfileService.findAll();
    }
    findOne(id) {
        return this.npoProfileService.findOne(+id);
    }
    update(id, updateNpoProfileDto) {
        return this.npoProfileService.update(+id, updateNpoProfileDto);
    }
    remove(id) {
        return this.npoProfileService.remove(+id);
    }
};
exports.NpoProfileController = NpoProfileController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_npo_profile_dto_1.CreateNpoProfileDto]),
    __metadata("design:returntype", void 0)
], NpoProfileController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NpoProfileController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NpoProfileController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_npo_profile_dto_1.UpdateNpoProfileDto]),
    __metadata("design:returntype", void 0)
], NpoProfileController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NpoProfileController.prototype, "remove", null);
exports.NpoProfileController = NpoProfileController = __decorate([
    (0, common_1.Controller)('npo-profile'),
    __metadata("design:paramtypes", [npo_profile_service_1.NpoProfileService])
], NpoProfileController);
//# sourceMappingURL=npo-profile.controller.js.map