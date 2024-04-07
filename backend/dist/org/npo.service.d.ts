import { NpoDocument } from './npo.model';
import { CreateNpoDto } from './npo.dto';
export declare class NpoService {
    private readonly npoModel;
    constructor(npoModel: any);
    register(createNpoDto: CreateNpoDto): Promise<NpoDocument>;
    create(npo: Partial<NpoDocument>): Promise<NpoDocument>;
    private hashPassword;
}
