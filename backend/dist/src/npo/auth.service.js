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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const npo_model_1 = require("./npo.model");
const bcrypt = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(npoModel, jwtService) {
        this.npoModel = npoModel;
        this.jwtService = jwtService;
    }
    async login(name, password) {
        try {
            const npo = await this.npoModel.findOne({ name });
            if (!npo) {
                return { token: null, message: 'Invalid name or password' };
            }
            const isPasswordMatch = await bcrypt.compare(password, npo.password);
            if (!isPasswordMatch) {
                return { token: null, message: 'Invalid email or password' };
            }
            const payload = { npoId: npo._id };
            const token = await this.jwtService.sign(payload);
            return { token };
        }
        catch (error) {
            console.error('Error during login:', error);
            throw new Error('Internal server error');
        }
    }
    async validateNpoByJwt(payload) {
        const npoId = payload.userId;
        const npo = await this.npoModel.findById(npoId);
        return npo;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(npo_model_1.Npo.name)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map