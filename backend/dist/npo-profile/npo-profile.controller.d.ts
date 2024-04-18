import { NpoProfileService } from './npo-profile.service';
import { CreateNpoProfileDto } from './dto/create-npo-profile.dto';
import { UpdateNpoProfileDto } from './dto/update-npo-profile.dto';
export declare class NpoProfileController {
    private readonly npoProfileService;
    constructor(npoProfileService: NpoProfileService);
    create(createNpoProfileDto: CreateNpoProfileDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateNpoProfileDto: UpdateNpoProfileDto): string;
    remove(id: string): string;
}
