import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Npo, NpoSchema } from './npo.model';
import { JwtModule } from '@nestjs/jwt';
import { Opportunities, OpportunitiesSchema } from './opportunities.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Npo.name, schema: NpoSchema }]),
    MongooseModule.forFeature([{ name: Opportunities.name, schema: OpportunitiesSchema }]),
    JwtModule.register({
      secret:'abcd',
      signOptions: { expiresIn: '30m' },
    }),
    
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModuleNpo {}
