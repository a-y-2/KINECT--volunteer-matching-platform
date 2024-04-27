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
exports.OpportunityService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const opportunity_schema_1 = require("./entities/opportunity.schema");
let OpportunityService = class OpportunityService {
    constructor(opportunityModel) {
        this.opportunityModel = opportunityModel;
    }
    async createOpportunity(createOpportunityDto) {
        const newOpportunity = new this.opportunityModel(createOpportunityDto);
        return await newOpportunity.save();
    }
    async findAll() {
        return await this.opportunityModel.find();
    }
    async findByNpoProfile(npoProfileId) {
        return await this.opportunityModel.find({ npoProfile: npoProfileId });
    }
    async findOne(id) {
        return await this.opportunityModel.findById(id);
    }
    async update(id, updateOpportunityDto) {
        return await this.opportunityModel.findByIdAndUpdate(id, updateOpportunityDto, { new: true });
    }
    async delete(id) {
        return await this.opportunityModel.findByIdAndDelete(id);
    }
    async addOpportunityToNpoProfile(opportunityId) {
    }
};
exports.OpportunityService = OpportunityService;
exports.OpportunityService = OpportunityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(opportunity_schema_1.Opportunity.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OpportunityService);
//# sourceMappingURL=opportunity.service.js.map