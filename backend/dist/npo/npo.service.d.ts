import { Npo, NpoDocument } from './npo.model';
import { CreateNpoDto } from './npo.dto';
export declare class NpoService {
    private readonly npoModel;
    constructor(npoModel: any);
    register(createNpoDto: CreateNpoDto): Promise<NpoDocument>;
    findByName(name: string): Promise<Npo | null>;
    create(npo: Partial<NpoDocument>): Promise<NpoDocument>;
    private hashPassword;
    findById(id: string): Promise<Npo | null>;
}
