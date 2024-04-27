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
exports.NpoController = void 0;
const common_1 = require("@nestjs/common");
const npo_dto_1 = require("./npo.dto");
const npo_service_1 = require("./npo.service");
const opportunity_dto_1 = require("./opportunity.dto");
let NpoController = class NpoController {
    constructor(npoService) {
        this.npoService = npoService;
    }
    async register(createNpoDto) {
        const npo = await this.npoService.register(createNpoDto);
        return npo;
    }
    async createOpportunity(createOpportunityDto, req) {
        const npoId = req.body.npoId || req.headers['npo-id'];
        if (!npoId) {
            throw new common_1.BadRequestException('Missing NPO ID in request');
        }
        if (!npoId) {
            throw new common_1.BadRequestException('Invalid NPO credentials or authorization');
        }
        const opportunity = await this.npoService.createOpportunity(npoId, createOpportunityDto);
        return opportunity;
    }
};
exports.NpoController = NpoController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [npo_dto_1.CreateNpoDto]),
    __metadata("design:returntype", Promise)
], NpoController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('opportunity'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [opportunity_dto_1.CreateOpportunityDto, Object]),
    __metadata("design:returntype", Promise)
], NpoController.prototype, "createOpportunity", null);
exports.NpoController = NpoController = __decorate([
    (0, common_1.Controller)('npo'),
    __metadata("design:paramtypes", [npo_service_1.NpoService])
], NpoController);
//# sourceMappingURL=npo.controller.js.map