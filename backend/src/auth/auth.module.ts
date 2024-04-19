// auth.module.ts
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { User, UserSchema } from '../user/user.model';
import {Npo, NpoSchema} from '../npo/npo.model';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from 'src/user/user.service';
import {NpoService} from '../npo/npo.service';
import { UserModule } from 'src/user/user.module';
import {NpoModule} from '../npo/npo.module';

@Module({
  imports: [
    UserModule,
    NpoModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Npo.name, schema: NpoSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'abcd', // Replace with your JWT secret key
      signOptions: { expiresIn: '1h' }, // Adjust expiration as needed
    }),
  ],
  providers: [AuthService, JwtStrategy,UserService,NpoService],
  exports: [AuthService,PassportModule, JwtModule], // Export AuthService to be used by other modules
})
export class AuthModule {}
