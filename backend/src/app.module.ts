import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule} from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModuleUser } from './user/auth.module';
import { AuthModuleNpo } from './npo/auth.module';
import { NpoModule} from './npo/npo.module';
import { UserProfileController } from './user-profile/user-profile.controller';
import { UserProfileService } from './user-profile/user-profile.service';
import { UserProfile, UserProfileSchema } from './user-profile/user-profile.schema';
import { User, UserSchema } from './user/user.model';
import { UserProfileModule } from './user-profile/user-profile.module';
import { AuthModule } from './auth/auth.module';
import { NpoProfileModule } from './npo-profile/npo-profile.module';
import { NpoAuthModule } from './auth/npo-auth.module';
// import { NpoOpportunityModule } from './npo-profile/opportunity.module';
// import { CorsModule } from '@nestjs/common';




/*

    By importing UserModule and adding it to the imports array, you're essentially registering the User Management Module with your main application module. This makes the functionalities and services defined in the User Management Module accessible throughout your application.


*/
@Module({
  imports: [
            // Import the CorsModule and configure it
            // CorsModule.forRoot({
            //   // Define your CORS options here
            //   origin: '*', // Allow requests from any origin (you might want to restrict this in production)
            //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            //   preflightContinue: false,
            //   optionsSuccessStatus: 204,
            // }),
            MongooseModule.forRoot('mongodb+srv://ayushiprasad:aglV79cJViNiN38b@cluster0.d5sgvbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
            UserModule,  
            AuthModuleUser, 
            AppModule,
            AuthModuleNpo,
            NpoModule,
            UserProfileModule,
            AuthModule,
            NpoProfileModule,
            NpoAuthModule,
            // NpoOpportunityModule
  ],
  controllers: [AppController],
  providers: [AppService,UserModule,NpoModule,
    UserProfileModule,
    AuthModuleUser,
    AuthModule,
    NpoAuthModule,NpoProfileModule,AuthModuleNpo,
    // NpoOpportunityModule],
  //exports: [UserService],
]})
export class AppModule {}
