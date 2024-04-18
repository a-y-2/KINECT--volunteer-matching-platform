import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NpoProfileService } from './npo-profile.service';
import { CreateNpoProfileDto } from './dto/create-npo-profile.dto';
import { UpdateNpoProfileDto } from './dto/update-npo-profile.dto';

@Controller('npo-profile')
export class NpoProfileController {
  constructor(private readonly npoProfileService: NpoProfileService) {}

  @Post()
  create(@Body() createNpoProfileDto: CreateNpoProfileDto) {
    return this.npoProfileService.create(createNpoProfileDto);
  }

  @Get()
  findAll() {
    return this.npoProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.npoProfileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNpoProfileDto: UpdateNpoProfileDto) {
    return this.npoProfileService.update(+id, updateNpoProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.npoProfileService.remove(+id);
  }
}
