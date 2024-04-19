import { NpoProfileService } from './npo-profile.service';
import { NpoProfile } from './entities/npo-profile.schema';
import { CreateNpoProfileDto } from './dto/create-npo-profile.dto';
export declare class NpoProfileController {
    private readonly npoProfileService;
    private readonly logger;
    constructor(npoProfileService: NpoProfileService);
    createNpoProfile(req: any, createNpoProfileDto: CreateNpoProfileDto): Promise<NpoProfile>;
    getNpoProfileById(id: string, req: any): Promise<NpoProfile>;
    updateNpoProfileById(req: any, id: string, updateNpoProfileDto: any): Promise<NpoProfile>;
    deleteNpoProfileById(req: any, id: string): Promise<any>;
}
