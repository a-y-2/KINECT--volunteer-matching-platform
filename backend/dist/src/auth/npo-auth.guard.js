"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NpoAuthGuard_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpoAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
let NpoAuthGuard = NpoAuthGuard_1 = class NpoAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger(NpoAuthGuard_1.name);
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        this.logger.log(`Incoming request: ${request.method} ${request.url}`);
        this.logger.log(`Request headers: ${JSON.stringify(request.headers)}`);
        return super.canActivate(context);
    }
    handleRequest(err, npo, info) {
        if (err || !npo) {
            this.logger.error(`JWT validation failed: ${err || 'NPO not authenticated'}`);
            if (info instanceof Error) {
                this.logger.error(`JWT validation error details: ${info.message}`);
            }
            else {
                this.logger.error(`JWT validation info: ${JSON.stringify(info)}`);
            }
            throw err || new common_1.UnauthorizedException();
        }
        this.logger.log(`NPO authenticated successfully: ${npo.name} (${npo.id})`);
        return npo;
    }
};
exports.NpoAuthGuard = NpoAuthGuard;
exports.NpoAuthGuard = NpoAuthGuard = NpoAuthGuard_1 = __decorate([
    (0, common_1.Injectable)()
], NpoAuthGuard);
//# sourceMappingURL=npo-auth.guard.js.map