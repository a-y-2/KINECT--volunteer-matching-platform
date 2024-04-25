import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'; // Import JwtModule
import { NpoProfileController } from './npo-profile.controller';
import { NpoProfileService } from './npo-profile.service';
import { NpoAuthGuard } from '../auth/npo-auth.guard'; // Import JwtAuthGuard
import { NpoModule } from '../npo/npo.module'; 
import { NpoAuthModule } from '../auth/npo-auth.module';
import { Npo, NpoSchema } from '../npo/npo.model';
import { MongooseModule } from '@nestjs/mongoose';
import { NpoProfileSchema,NpoProfile } from './entities/npo-profile.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: NpoProfile.name, schema: NpoProfileSchema }]),
    MongooseModule.forFeature([{ name: Npo.name, schema: NpoSchema }]),
    JwtModule.register({
      secret: 'abcd', // Provide your JWT secret key here
      signOptions: { expiresIn: '24h' },
    }),
    NpoAuthModule, // Example import for UserModule (if needed)
    NpoModule,
  ],
  controllers: [NpoProfileController],
  providers: [NpoProfileService, NpoAuthGuard], // Ensure JwtAuthGuard is provided
})
export class NpoProfileModule {}
