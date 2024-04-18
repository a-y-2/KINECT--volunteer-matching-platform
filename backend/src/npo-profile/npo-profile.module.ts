import { Module } from '@nestjs/common';
import { NpoProfileService } from './npo-profile.service';
import { NpoProfileController } from './npo-profile.controller';

@Module({
  controllers: [NpoProfileController],
  providers: [NpoProfileService],
})
export class NpoProfileModule {}
