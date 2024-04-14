"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const mongoose_1 = require("@nestjs/mongoose");
const auth_module_1 = require("./user/auth.module");
const auth_module_2 = require("./npo/auth.module");
const npo_module_1 = require("./npo/npo.module");
const user_profile_module_1 = require("./user-profile/user-profile.module");
const auth_module_3 = require("./auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forRoot('mongodb+srv://ayushiprasad:aglV79cJViNiN38b@cluster0.d5sgvbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
            user_module_1.UserModule,
            auth_module_1.AuthModuleUser,
            AppModule,
            auth_module_2.AuthModuleNpo,
            npo_module_1.NpoModule,
            user_profile_module_1.UserProfileModule,
            auth_module_3.AuthModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, user_module_1.UserModule, npo_module_1.NpoModule, user_profile_module_1.UserProfileModule, auth_module_1.AuthModuleUser, auth_module_3.AuthModule],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map