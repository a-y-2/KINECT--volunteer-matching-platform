import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VolunteerController } from './volunteer.controller';
import { VolunteerService } from './volunteer.service';
import { Volunteer, VolunteerSchema } from './volunteer.schema';

@Module({
  imports: [
    // Register the Mongoose model for Volunteer
    MongooseModule.forFeature([{ name: Volunteer.name, schema: VolunteerSchema }]),
  ],
  controllers: [VolunteerController],
  providers: [VolunteerService],
  exports: [VolunteerService], // Optional, if needed to be used in other modules
})
export class VolunteerModule {}
