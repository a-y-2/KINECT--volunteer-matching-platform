// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';
// import { User, UserSchema } from './user.model'; // Assuming User is the model

// @Module({
//   imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])], // Import User model
//   providers: [AuthService], // Only include AuthService
//   controllers: [AuthController],
// })
// export class AuthModule {}
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User, UserSchema } from './user.model'; // Assuming User is the model

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])], // Import User model
  providers: [AuthService], // Only include AuthService
  controllers: [AuthController],
})
export class AuthModule {}
