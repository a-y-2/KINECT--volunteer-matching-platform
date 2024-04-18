import { Injectable } from '@nestjs/common';
import { CreateNpoProfileDto } from './dto/create-npo-profile.dto';
import { UpdateNpoProfileDto } from './dto/update-npo-profile.dto';

@Injectable()
export class NpoProfileService {
  create(createNpoProfileDto: CreateNpoProfileDto) {
    return 'This action adds a new npoProfile';
  }

  findAll() {
    return `This action returns all npoProfile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} npoProfile`;
  }

  update(id: number, updateNpoProfileDto: UpdateNpoProfileDto) {
    return `This action updates a #${id} npoProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} npoProfile`;
  }
}
