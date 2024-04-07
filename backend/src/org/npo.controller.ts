import { Body, Controller, Post } from '@nestjs/common';
import { CreateNpoDto } from './npo.dto';
import { NpoService } from './npo.service';
import { NpoDocument } from './npo.model';

@Controller('npo') // Path for NPO routes
export class NpoController { // Renamed to NpoController
  constructor(private readonly npoService: NpoService) {}

  @Post('register') // Endpoint for NPO registration
  async register(@Body() createNpoDto: CreateNpoDto): Promise<NpoDocument> {
    // Call NpoService's register method with DTO
    const npo = await this.npoService.register(createNpoDto);

    return npo; // Return the created NPO
  }
}
