import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Req, Logger, NotFoundException,Injectable,LogLevel, Inject, BadRequestException } from '@nestjs/common';
import { NpoProfileService } from './npo-profile.service';
import { NpoProfile,NpoProfileSchema } from './entities/npo-profile.schema';
import { NpoAuthGuard } from '../auth/npo-auth.guard';
import { CreateNpoProfileDto } from './dto/create-npo-profile.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Controller('npo-profile')
export class NpoProfileController {

private readonly logger = new Logger(NpoProfileController.name);

  constructor(private readonly npoProfileService: NpoProfileService,
    @InjectModel(NpoProfile.name) private readonly npoProfileModel: Model<NpoProfile>
  ) {}

  //@UseGuards(NpoAuthGuard)
  // @Post()
  // async createNpoProfile(@Req() req, @Body() createNpoProfileDto: CreateNpoProfileDto): Promise<NpoProfile> {
    
  //   try {
  //     // Logging the incoming request details
  //     this.logger.log(`Received request to create npo profile: ${JSON.stringify(createNpoProfileDto)}`);
  //     this.logger.log(req.npo, req.name, req.description, );

  //     if (!req.npo.name) {
  //       this.logger.warn('Npo not authenticated');
  //       throw new NotFoundException('Npo not authenticated');
  //     }
 
  //     // Extracting npoId from the authenticated request
  //     const loggedInNpoId = req.npo._id;
  //     this.logger.log(`Extracted npoId: ${loggedInNpoId}`);

  //     if (!loggedInNpoId) {
  //       this.logger.warn('npoId not provided');
  //       throw new NotFoundException('npoId not provided');
  //     }

  //     // Creating npo profile with the provided data and npoId
  //     const npoProfile = await this.npoProfileService.createNpoProfile(createNpoProfileDto, loggedInNpoId);

  //     // Logging successful creation of npo profile
  //     this.logger.log(`Npo profile created successfully`);

  //     return npoProfile;
  //   } catch (error) {
  //     // Logging error details
  //     this.logger.error(`Error creating npo profile: ${error.message}`);

  //     // Rethrowing the error to be handled by global error handler
  //     throw error;
  //   }
  // }

  @Post()
  async createNpoProfile(
    @Req() req,
    @Body() createNpoProfileDto: CreateNpoProfileDto,
    @Body('loggedInNpoId') loggedInNpoId: string, // Extract from request body
  ): Promise<NpoProfile> {
    try {
      // Logging the incoming request details
      this.logger.log(`Received request to create npo profile for npo: ${loggedInNpoId}`);

      // Validate the loggedInNpoId (optional)
      if (!loggedInNpoId) {
        throw new BadRequestException('loggedInNpoId is required');
      }

      // Delegate creation logic to the service (choose one option):

      // Option 1: Convert string to ObjectId (if applicable)
      // const objectId = new mongoose.Types.ObjectId(loggedInNpoId);
      const npoProfile = await this.npoProfileService.createNpoProfile(createNpoProfileDto, loggedInNpoId);

      // Option 2: Modify Service Method Parameter Type (if necessary)
      // const npoProfile = await this.npoProfileService.createNpoProfile(createNpoProfileDto, loggedInNpoId); // Change parameter type to string

      // Logging successful creation of npo profile
      this.logger.log(`Npo profile created successfully for npo: ${loggedInNpoId}`);

      return npoProfile;
    } catch (error) {
      // Logging error details
      this.logger.error(`Error creating npo profile: ${error.message}`);

      // Rethrowing the error to be handled by global error handler
      throw error;
    }
  }
  // private logRequestDetails(req): void {
  //   // Logging request method and URL
  //   this.logger.log(`Request Method: ${req.method}`);
  //   this.logger.log(`Request URL: ${req.url}`);

  //   // Logging request headers
  //   this.logger.log('Request Headers:');
  //   for (const key of Object.keys(req.headers)) {
  //     this.logger.log(`${key}: ${req.headers[key]}`);
  //   }

  //   // Logging request body (if present)
  //   if (req.body) {
  //     this.logger.log('Request Body:');
  //     this.logger.log(JSON.stringify(req.body));
  //   }

  //   // Logging user information (if authenticated)
  //   if (req.user) {
  //     this.logger.log('Authenticated User:');
  //     this.logger.log(JSON.stringify(req.user));
  //   }
  // }

  // @UseGuards(JwtAuthGuard)
  // @Get(':id')
  // async getUserProfileById(@Param('id') id: string): Promise<UserProfile> {
  //   return this.userProfileService.getUserProfileById(id);
  // }



  //@UseGuards(NpoAuthGuard)
  @Get(':id')
  async getNpoProfileById(@Param('id') id: string, @Req() req): Promise<NpoProfile> {
    
    try {
     // this.logRequestDetails(req, id);

      // Retrieve user profile by ID using the UserProfileService
      const npoProfile = await this.npoProfileService.getNpoProfileById(id);

      if (!npoProfile) {
        this.logger.warn(`Npo profile with ID ${id} not found`); 
        throw new NotFoundException(`Npo profile with ID ${id} not found`);
      }

      this.logger.log(`Npo profile retrieved successfully: ${JSON.stringify(npoProfile)}`);

      return npoProfile;
    } catch (error) {
      this.logger.error(`Error retrieving npo profile: ${error.message}`);
      throw error; 
    }
  }

  // private logRequestDetails(req, id: string): void {
  //   this.logger.log(`Received request to retrieve user profile with ID: ${id}`);
  //   this.logger.log(`Request Method: ${req.method}`);
  //   this.logger.log(`Request URL: ${req.url}`);

  //   // Logging request headers
  //   this.logger.log('Request Headers:');
  //   for (const key of Object.keys(req.headers)) {
  //     this.logger.log(`${key}: ${req.headers[key]}`);
  //   }

  //   // Logging authenticated user (if available)
  //   if (req.user) {
  //     this.logger.log('Authenticated User:');
  //     this.logger.log(JSON.stringify(req.user));
  //   }
  // }

  @Put(':id')
  async updateNpoProfileById(
    @Param('id') id: string,
    @Body() updateNpoProfileDto: any,
  ): Promise<NpoProfile | null> {
    const npoProfile = await this.npoProfileService.updateNpoProfileById(id, updateNpoProfileDto);
    if (!npoProfile) {
      throw new NotFoundException('Npo profile not found');
    }
    return npoProfile;
  }

  //@UseGuards(NpoAuthGuard)
  @Delete(':id')
  async deleteNpoProfileById(@Param('id') id: string): Promise<{ message: string }> {
    const result = await this.npoProfileService.deleteNpoProfileById(id);
    if (!result) {
      throw new NotFoundException('Npo profile not found');
    }
    return { message: 'Npo profile deleted successfully' };
  }
}
