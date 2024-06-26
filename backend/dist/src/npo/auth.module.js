"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModuleNpo = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const npo_model_1 = require("./npo.model");
const jwt_1 = require("@nestjs/jwt");
const opportunities_schema_1 = require("./opportunities.schema");
let AuthModuleNpo = class AuthModuleNpo {
};
exports.AuthModuleNpo = AuthModuleNpo;
exports.AuthModuleNpo = AuthModuleNpo = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: npo_model_1.Npo.name, schema: npo_model_1.NpoSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: opportunities_schema_1.Opportunities.name, schema: opportunities_schema_1.OpportunitiesSchema }]),
            jwt_1.JwtModule.register({
                secret: 'abcd',
                signOptions: { expiresIn: '30m' },
            }),
        ],
        providers: [auth_service_1.AuthService],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModuleNpo);
//# sourceMappingURL=auth.module.js.map