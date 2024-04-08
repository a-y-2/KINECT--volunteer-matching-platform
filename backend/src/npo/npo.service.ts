import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Npo, NpoDocument } from './npo.model';
import { CreateNpoDto } from './npo.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class NpoService { // Renamed from UserService to NpoService
  constructor(@InjectModel(Npo.name) private readonly npoModel: any) {} // Inject Npo model

  async register(createNpoDto: CreateNpoDto): Promise<NpoDocument> {
    const encryptedPassword = await this.hashPassword(createNpoDto.password);

    // Create Npo object from DTO, excluding password fields (handled separately)
    const npo = await this.create({
      ...createNpoDto,
      password: encryptedPassword,
    });

    return npo;
  }

  async create(npo: Partial<NpoDocument>): Promise<NpoDocument> {
    const createdNpo = await this.npoModel.create(npo);
    return createdNpo;
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }
}
