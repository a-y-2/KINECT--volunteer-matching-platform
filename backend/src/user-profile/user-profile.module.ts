import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'; // Import JwtModule
import { UserProfileController } from './user-profile.controller';
import { UserProfileService } from './user-profile.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Import JwtAuthGuard
import { UserModule } from '../user/user.module'; // Example import for UserModule
import { AuthModule } from '../auth/auth.module';
import { User, UserSchema } from '../user/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { UserProfileSchema,UserProfile } from './user-profile.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserProfile.name, schema: UserProfileSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: 'abcd', // Provide your JWT secret key here
      signOptions: { expiresIn: '24h' },
    }),
    AuthModule, // Example import for UserModule (if needed)
    UserModule,
  ],
  controllers: [UserProfileController],
  providers: [UserProfileService, JwtAuthGuard], // Ensure JwtAuthGuard is provided
})
export class UserProfileModule {}
 