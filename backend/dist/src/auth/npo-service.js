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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpoAuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const npo_service_1 = require("../npo/npo.service");
let NpoAuthService = class NpoAuthService {
    constructor(npoService, jwtService) {
        this.npoService = npoService;
        this.jwtService = jwtService;
    }
    async validateNpo(name, password) {
        const npo = await this.npoService.findByName(name);
        if (npo && npo.comparePassword(password)) {
            return npo;
        }
        return null;
    }
    async login(name, password) {
        const npo = await this.validateNpo(name, password);
        if (!npo) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const payload = { npoId: npo.id };
        const token = this.jwtService.sign(payload);
        return token;
    }
    async verifyToken(token) {
        try {
            const decoded = this.jwtService.verify(token);
            const npoId = decoded.npoId;
            const npo = await this.npoService.findById(npoId);
            if (!npo) {
                throw new common_1.UnauthorizedException('npo not found');
            }
            return npo;
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid token');
        }
    }
    async validateNpoByJwt(payload) {
        const { npoId } = payload;
        const npo = await this.npoService.findById(npoId);
        if (!npo) {
            throw new common_1.UnauthorizedException('Invalid npo');
        }
        return npo;
    }
};
exports.NpoAuthService = NpoAuthService;
exports.NpoAuthService = NpoAuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [npo_service_1.NpoService,
        jwt_1.JwtService])
], NpoAuthService);
//# sourceMappingURL=npo-service.js.map