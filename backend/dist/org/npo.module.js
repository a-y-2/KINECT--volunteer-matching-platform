"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpoModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const npo_service_1 = require("./npo.service");
const npo_model_1 = require("./npo.model");
const npo_controller_1 = require("./npo.controller");
let NpoModule = class NpoModule {
};
exports.NpoModule = NpoModule;
exports.NpoModule = NpoModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Npo', schema: npo_model_1.NpoSchema }])],
        providers: [npo_service_1.NpoService],
        exports: [npo_service_1.NpoService],
        controllers: [npo_controller_1.NpoController],
    })
], NpoModule);
//# sourceMappingURL=npo.module.js.map