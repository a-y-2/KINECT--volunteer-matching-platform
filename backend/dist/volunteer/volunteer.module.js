"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VolunteerModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const volunteer_controller_1 = require("./volunteer.controller");
const volunteer_service_1 = require("./volunteer.service");
const volunteer_schema_1 = require("./volunteer.schema");
let VolunteerModule = class VolunteerModule {
};
exports.VolunteerModule = VolunteerModule;
exports.VolunteerModule = VolunteerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: volunteer_schema_1.Volunteer.name, schema: volunteer_schema_1.VolunteerSchema }]),
        ],
        controllers: [volunteer_controller_1.VolunteerController],
        providers: [volunteer_service_1.VolunteerService],
        exports: [volunteer_service_1.VolunteerService],
    })
], VolunteerModule);
//# sourceMappingURL=volunteer.module.js.map