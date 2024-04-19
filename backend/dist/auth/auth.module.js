"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const auth_service_1 = require("./auth.service");
const jwt_strategy_1 = require("./jwt.strategy");
const user_model_1 = require("../user/user.model");
const npo_model_1 = require("../npo/npo.model");
const mongoose_1 = require("@nestjs/mongoose");
const user_service_1 = require("../user/user.service");
const npo_service_1 = require("../npo/npo.service");
const user_module_1 = require("../user/user.module");
const npo_module_1 = require("../npo/npo.module");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            npo_module_1.NpoModule,
            mongoose_1.MongooseModule.forFeature([{ name: user_model_1.User.name, schema: user_model_1.UserSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: npo_model_1.Npo.name, schema: npo_model_1.NpoSchema }]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: 'abcd',
                signOptions: { expiresIn: '1h' },
            }),
        ],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, user_service_1.UserService, npo_service_1.NpoService],
        exports: [auth_service_1.AuthService, passport_1.PassportModule, jwt_1.JwtModule],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map