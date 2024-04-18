import { CreateNpoProfileDto } from './dto/create-npo-profile.dto';
import { UpdateNpoProfileDto } from './dto/update-npo-profile.dto';
export declare class NpoProfileService {
    create(createNpoProfileDto: CreateNpoProfileDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateNpoProfileDto: UpdateNpoProfileDto): string;
    remove(id: number): string;
}
