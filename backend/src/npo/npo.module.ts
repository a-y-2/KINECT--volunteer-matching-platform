import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NpoService } from './npo.service';
import { Npo, NpoSchema } from './npo.model';
import { NpoController } from './npo.controller';
import { OpportunitiesSchema } from './opportunities.schema';
// import { OpportunityController } from './opportunity.controller';


//This line is like a recipe for creating the UserModule itself.It uses the @Module decorator to define what this module does 
/*

name: 'User': This specifies the name we're giving to the Mongoose model (User) within this module.
schema: UserSchema: This tells Mongoose to use the previously imported UserSchema for defining the structure of user data in 
the database.

exports: [UserService],-> the UserService should also be exported from this module. This allows other modules in your application 
to import and use the UserService for user-related functionalities.

*/
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Npo', schema: NpoSchema }]),
            MongooseModule.forFeature([{ name: 'Opportunities', schema: OpportunitiesSchema }])],
  
  providers: [NpoService],
  exports: [NpoService],
  controllers: [NpoController,
    // OpportunityController
  ],
})
export class NpoModule {}
