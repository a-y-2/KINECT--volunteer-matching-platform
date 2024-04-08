import { CreateNpoDto } from './npo.dto';
import { NpoService } from './npo.service';
import { NpoDocument } from './npo.model';
export declare class NpoController {
    private readonly npoService;
    constructor(npoService: NpoService);
    register(createNpoDto: CreateNpoDto): Promise<NpoDocument>;
}
