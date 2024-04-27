import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { NpoAuthService } from './npo-service';
import { NpoJwtStrategy } from './npo.strategy';
import { User, UserSchema } from '../user/user.model';
import {Npo, NpoSchema} from '../npo/npo.model';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from 'src/user/user.service';
import {NpoService} from '../npo/npo.service';
import {NpoModule} from '../npo/npo.module';
import { Opportunities, OpportunitiesSchema } from 'src/npo/opportunities.schema';

@Module({
    imports: [
      NpoModule,
      MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
      MongooseModule.forFeature([{ name: Npo.name, schema: NpoSchema }]),
      MongooseModule.forFeature([{ name: Opportunities.name, schema: OpportunitiesSchema }]),
      PassportModule.register({ defaultStrategy: 'jwt' }),
      JwtModule.register({
        secret: 'abcd', // Replace with your JWT secret key
        signOptions: { expiresIn: '1h' }, // Adjust expiration as needed
      }),
    ],
    providers: [NpoAuthService, NpoJwtStrategy,NpoService,UserService],
    exports: [NpoAuthService,PassportModule, JwtModule], // Export AuthService to be used by other modules
  })
  export class NpoAuthModule {}
  