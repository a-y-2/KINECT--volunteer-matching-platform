"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpoOpportunityModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const npo_profile_schema_1 = require("./entities/npo-profile.schema");
const opportunity_schema_1 = require("./entities/opportunity.schema");
const npo_profile_service_1 = require("./npo-profile.service");
const opportunity_service_1 = require("./opportunity.service");
const opportunity_controller_1 = require("./opportunity.controller");
const npo_profile_module_1 = require("./npo-profile.module");
const npo_model_1 = require("../npo/npo.model");
let NpoOpportunityModule = class NpoOpportunityModule {
};
exports.NpoOpportunityModule = NpoOpportunityModule;
exports.NpoOpportunityModule = NpoOpportunityModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: npo_model_1.Npo.name, schema: npo_model_1.NpoSchema },
                { name: npo_profile_schema_1.NpoProfile.name, schema: npo_profile_schema_1.NpoProfileSchema },
                { name: opportunity_schema_1.Opportunity.name, schema: opportunity_schema_1.OpportunitySchema },
            ]),
            npo_profile_module_1.NpoProfileModule
        ],
        providers: [npo_profile_service_1.NpoProfileService, opportunity_service_1.OpportunityService],
        controllers: [opportunity_controller_1.NpoOpportunityController],
    })
], NpoOpportunityModule);
//# sourceMappingURL=opportunity.module.js.map