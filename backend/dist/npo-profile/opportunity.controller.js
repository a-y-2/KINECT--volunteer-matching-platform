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
exports.NpoOpportunityController = void 0;
const common_1 = require("@nestjs/common");
const opportunity_service_1 = require("./opportunity.service");
const opportunity_dto_1 = require("./dto/opportunity.dto");
let NpoOpportunityController = class NpoOpportunityController {
    constructor(opportunityService) {
        this.opportunityService = opportunityService;
    }
    async createOpportunity(createOpportunityDto) {
        return await this.opportunityService.createOpportunity(createOpportunityDto);
    }
    async findAllOpportunities() {
        return await this.opportunityService.findAll();
    }
    async findOpportunitiesByNpoProfile(npoProfileId) {
        return await this.opportunityService.findByNpoProfile(npoProfileId);
    }
    async findOne(id) {
        return await this.opportunityService.findOne(id);
    }
    async updateOpportunity(id, updateOpportunityDto) {
        return await this.opportunityService.update(id, updateOpportunityDto);
    }
    async deleteOpportunity(id) {
        return await this.opportunityService.delete(id);
    }
};
exports.NpoOpportunityController = NpoOpportunityController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [opportunity_dto_1.CreateOpportunityDto]),
    __metadata("design:returntype", Promise)
], NpoOpportunityController.prototype, "createOpportunity", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NpoOpportunityController.prototype, "findAllOpportunities", null);
__decorate([
    (0, common_1.Get)(':npoProfileId/opportunities'),
    __param(0, (0, common_1.Param)('npoProfileId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NpoOpportunityController.prototype, "findOpportunitiesByNpoProfile", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NpoOpportunityController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, opportunity_dto_1.UpdateOpportunityDto]),
    __metadata("design:returntype", Promise)
], NpoOpportunityController.prototype, "updateOpportunity", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NpoOpportunityController.prototype, "deleteOpportunity", null);
exports.NpoOpportunityController = NpoOpportunityController = __decorate([
    (0, common_1.Controller)('npo-opportunities'),
    __metadata("design:paramtypes", [opportunity_service_1.OpportunityService])
], NpoOpportunityController);
//# sourceMappingURL=opportunity.controller.js.map