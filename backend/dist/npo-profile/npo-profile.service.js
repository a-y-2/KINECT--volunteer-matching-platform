"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpoProfileService = void 0;
const common_1 = require("@nestjs/common");
let NpoProfileService = class NpoProfileService {
    create(createNpoProfileDto) {
        return 'This action adds a new npoProfile';
    }
    findAll() {
        return `This action returns all npoProfile`;
    }
    findOne(id) {
        return `This action returns a #${id} npoProfile`;
    }
    update(id, updateNpoProfileDto) {
        return `This action updates a #${id} npoProfile`;
    }
    remove(id) {
        return `This action removes a #${id} npoProfile`;
    }
};
exports.NpoProfileService = NpoProfileService;
exports.NpoProfileService = NpoProfileService = __decorate([
    (0, common_1.Injectable)()
], NpoProfileService);
//# sourceMappingURL=npo-profile.service.js.map