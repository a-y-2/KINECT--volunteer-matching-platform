import { PartialType } from '@nestjs/mapped-types';
import { CreateNpoProfileDto } from './create-npo-profile.dto';

export class UpdateNpoProfileDto extends PartialType(CreateNpoProfileDto) {}
