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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const npo_service_1 = require("../npo/npo.service");
let AuthService = class AuthService {
    constructor(userService, npoService, jwtService) {
        this.userService = userService;
        this.npoService = npoService;
        this.jwtService = jwtService;
    }
    async validateUser(email, password) {
        const user = await this.userService.findByEmail(email);
        if (user && await user.comparePassword(password)) {
            return user;
        }
        return null;
    }
    async login(email, password) {
        const user = await this.validateUser(email, password);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const payload = { userId: user.id };
        const token = this.jwtService.sign(payload);
        return token;
    }
    async verifyToken(token) {
        try {
            const decoded = this.jwtService.verify(token);
            const userId = decoded.userId;
            const user = await this.userService.findById(userId);
            if (!user) {
                throw new common_1.UnauthorizedException('User not found');
            }
            return user;
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid token');
        }
    }
    async validateUserByJwt(payload) {
        const { userId } = payload;
        const user = await this.userService.findById(userId);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid user');
        }
        return user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        npo_service_1.NpoService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map