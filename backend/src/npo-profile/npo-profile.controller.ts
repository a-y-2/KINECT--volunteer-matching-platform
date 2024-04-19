import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Req, Logger, NotFoundException,Injectable,LogLevel, Inject } from '@nestjs/common';
import { NpoProfileService } from './npo-profile.service';
import { NpoProfile } from './entities/npo-profile.schema';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateNpoProfileDto } from './dto/create-npo-profile.dto';

@Controller('npo-profile')
export class NpoProfileController {

private readonly logger = new Logger(NpoProfileController.name);
  constructor(private readonly npoProfileService: NpoProfileService) {}

@UseGuards(JwtAuthGuard)
  @Post()
  async createNpoProfile(@Req() req, @Body() createNpoProfileDto: CreateNpoProfileDto): Promise<NpoProfile> {
    try {
      // Logging the incoming request details
      this.logger.log(`Received request to create npo profile: ${JSON.stringify(createNpoProfileDto)}`);

      // Logging the contents of the request object
      // this.logRequestDetails(req);

      // Checking if user is authenticated
      if (!req.npo) {
        this.logger.warn('Npo not authenticated');
        throw new NotFoundException('Npo not authenticated');
      }

      // Extracting npoId from the authenticated request
      const loggedInNpoId = req.npo._id;
      this.logger.log(`Extracted npoId: ${loggedInNpoId}`);

      if (!loggedInNpoId) {
        this.logger.warn('npoId not provided');
        throw new NotFoundException('npoId not provided');
      }

      // Creating npo profile with the provided data and npoId
      const npoProfile = await this.npoProfileService.createNpoProfile(createNpoProfileDto, loggedInNpoId);

      // Logging successful creation of npo profile
      this.logger.log(`Npo profile created successfully`);

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



  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateNpoProfileById(@Req() req, @Param('id') id: string, @Body() updateNpoProfileDto: any): Promise<NpoProfile> {
    const loggedInNpoId = req.npo._id; // Extract user ID from the authenticated request
    return this.npoProfileService.updateNpoProfileById(id, updateNpoProfileDto, loggedInNpoId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteNpoProfileById(@Req() req, @Param('id') id: string): Promise<any> {
    const loggedInNpoId = req.npo.npoId; // Extract user ID from the authenticated request
    return this.npoProfileService.deleteNpoProfileById(id, loggedInNpoId);
  }
}
