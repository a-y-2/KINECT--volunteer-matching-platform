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
var NpoProfileService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpoProfileService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const npo_profile_schema_1 = require("./entities/npo-profile.schema");
const npo_model_1 = require("../npo/npo.model");
const common_2 = require("@nestjs/common");
const mongoose_2 = require("mongoose");
let NpoProfileService = NpoProfileService_1 = class NpoProfileService {
    constructor(npoProfileModel, npoModel) {
        this.npoProfileModel = npoProfileModel;
        this.npoModel = npoModel;
        this.logger = new common_1.Logger(NpoProfileService_1.name);
    }
    async createNpoProfile(createNpoProfileDto, loggedInNpoId) {
        const npo = await this.npoModel.findById(loggedInNpoId);
        if (!npo) {
            throw new common_2.NotFoundException('Npo not found');
        }
        const newNpoProfile = new this.npoProfileModel({
            ...createNpoProfileDto,
            npo: npo,
        });
        return await newNpoProfile.save();
    }
    async getNpoProfileById(id) {
        if (!mongoose_2.Types.ObjectId.isValid(id))
            throw new common_1.BadRequestException('Invalid npo ID.');
        const npo = await this.npoProfileModel.findById(id);
        if (!npo)
            throw new common_2.NotFoundException('Npo not found.');
        return npo;
    }
    async updateNpoProfileById(id, updateNpoProfileDto, loggedInNpoId) {
        const npoProfile = await this.npoProfileModel.findById(id);
        if (!npoProfile) {
            throw new common_2.NotFoundException('Npo profile not found');
        }
        if (npoProfile.npo._id.toString() !== loggedInNpoId.toString()) {
            throw new common_1.UnauthorizedException('Unauthorized access');
        }
        const allowedUpdates = ['name', 'description', 'location', 'website', 'contactEmail', 'logo', 'missionStatement', 'areasOfFocus', 'foundingYear', 'socialMediaLinks', 'images', 'opportunities'];
        const update = Object.keys(updateNpoProfileDto)
            .filter((key) => allowedUpdates.includes(key))
            .reduce((acc, key) => ({ ...acc, [key]: updateNpoProfileDto[key] }), {});
        return await this.npoProfileModel.findByIdAndUpdate(id, update, { new: true });
    }
    async deleteNpoProfileById(id, loggedInNpoId) {
        const deletedProfile = await this.npoProfileModel.findByIdAndDelete(id);
        if (!deletedProfile) {
            throw new common_2.NotFoundException('npo profile not found');
        }
        return { message: 'npo profile deleted successfully' };
    }
};
exports.NpoProfileService = NpoProfileService;
exports.NpoProfileService = NpoProfileService = NpoProfileService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(npo_profile_schema_1.NpoProfile.name)),
    __param(1, (0, mongoose_1.InjectModel)(npo_model_1.Npo.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model, mongoose_2.default.Model])
], NpoProfileService);
//# sourceMappingURL=npo-profile.service.js.map