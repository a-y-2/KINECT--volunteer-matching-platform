import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule} from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './user/auth.module';
import { AuthModuleNpo } from './npo/auth.module';
import { NpoModule} from './npo/npo.module';


/*

    By importing UserModule and adding it to the imports array, you're essentially registering the User Management Module with your main application module. This makes the functionalities and services defined in the User Management Module accessible throughout your application.


*/
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://ayushiprasad:aglV79cJViNiN38b@cluster0.d5sgvbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
            UserModule,  
            AuthModule, 
            AuthModuleNpo,
            NpoModule   
  ],
  controllers: [AppController],
  providers: [AppService,UserModule,NpoModule],
  //exports: [UserService],
})
export class AppModule {}
