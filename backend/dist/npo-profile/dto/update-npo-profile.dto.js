"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNpoProfileDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_npo_profile_dto_1 = require("./create-npo-profile.dto");
class UpdateNpoProfileDto extends (0, mapped_types_1.PartialType)(create_npo_profile_dto_1.CreateNpoProfileDto) {
}
exports.UpdateNpoProfileDto = UpdateNpoProfileDto;
//# sourceMappingURL=update-npo-profile.dto.js.map