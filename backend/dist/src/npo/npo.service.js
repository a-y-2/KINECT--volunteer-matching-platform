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
var NpoService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const npo_model_1 = require("./npo.model");
const bcrypt = require("bcryptjs");
const opportunities_schema_1 = require("./opportunities.schema");
let NpoService = NpoService_1 = class NpoService {
    constructor(npoModel, opportunitiesModel) {
        this.npoModel = npoModel;
        this.opportunitiesModel = opportunitiesModel;
        this.logger = new common_1.Logger(NpoService_1.name);
    }
    async register(createNpoDto) {
        const encryptedPassword = await this.hashPassword(createNpoDto.password);
        const npo = await this.create({
            ...createNpoDto,
            password: encryptedPassword,
        });
        return npo;
    }
    async findByName(name) {
        return this.npoModel.findOne({ name }).exec();
    }
    async create(npo) {
        const createdNpo = await this.npoModel.create(npo);
        return createdNpo;
    }
    async hashPassword(password) {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }
    async findById(id) {
        return this.npoModel.findById(id).exec();
    }
    async isNpo(npoId) {
        try {
            const document = await this.npoModel.findOne({ 'npo._id': npoId });
            if (document) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.error('Error occurred while querying npo collection:', error);
            throw error;
        }
    }
    async createOpportunity(npoId, createOpportunityDto) {
        const isnpo = await this.isNpo(npoId);
        if (!isnpo) {
            console.error('npo not found');
        }
        else {
            const opportunity = new opportunities_schema_1.Opportunities({
                ...createOpportunityDto,
                npo: npoId,
            });
            try {
                const createdOpportunity = await this.opportunitiesModel.create(opportunity);
                return createdOpportunity;
            }
            catch (error) {
                this.logger.error('Error creating opportunity:', error);
                throw error;
            }
        }
    }
    async findAll() {
        try {
            const documents = await this.opportunitiesModel.find().exec();
            return documents;
        }
        catch (error) {
            console.error('Error occurred while fetching all documents:', error);
            throw error;
        }
    }
};
exports.NpoService = NpoService;
exports.NpoService = NpoService = NpoService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(npo_model_1.Npo.name)),
    __param(1, (0, mongoose_1.InjectModel)(opportunities_schema_1.Opportunities.name)),
    __metadata("design:paramtypes", [Object, Object])
], NpoService);
//# sourceMappingURL=npo.service.js.map