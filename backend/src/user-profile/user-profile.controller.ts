import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Req, Logger, NotFoundException } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { UserProfile } from './user-profile.schema';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateUserProfileDto } from './user-profile.dto';
@Controller('user-profile')
export class UserProfileController {

/*
Defines a constructor for UserProfileController that injects an instance of UserProfileService. 
This enables the controller to access methods from UserProfileService to handle user profile operations.
*/

private readonly logger = new Logger(UserProfileController.name);
  constructor(private readonly userProfileService: UserProfileService) {}
  
// @UseGuards(JwtAuthGuard)
// @Post()
// async createUserProfile(@Req() req, @Body() createUserProfileDto: CreateUserProfileDto): Promise<UserProfile> {
//   console.log(req.userId);
//   try {
//     if (!req.user ) {
//       throw new NotFoundException('User not authenticated');
//     }
//     else if(!req.user.userId)
//       throw new NotFoundException('userId not provided');
//     const loggedInUserId = req.user.userId; // Extract user ID from the authenticated request
//     const userProfile = await this.userProfileService.createUserProfile(createUserProfileDto, loggedInUserId);
//     return userProfile;
//   } catch (error) {
//     console.error('Error creating user profile:', error);
//     throw error; // Rethrow the error to be handled by global error handler
//   }
// }

@UseGuards(JwtAuthGuard)
  @Post()
  async createUserProfile(@Req() req, @Body() createUserProfileDto: CreateUserProfileDto): Promise<UserProfile> {
    try {
      // Logging the incoming request details
      this.logger.log(`Received request to create user profile: ${JSON.stringify(createUserProfileDto)}`);

      // Logging the contents of the request object
      // this.logRequestDetails(req);

      // Checking if user is authenticated
      if (!req.user) {
        this.logger.warn('User not authenticated');
        throw new NotFoundException('User not authenticated');
      }

      // Extracting userId from the authenticated request
      const loggedInUserId = req.user._id;
      this.logger.log(`Extracted userId: ${loggedInUserId}`);

      if (!loggedInUserId) {
        this.logger.warn('userId not provided');
        throw new NotFoundException('userId not provided');
      }

      // Creating user profile with the provided data and userId
      const userProfile = await this.userProfileService.createUserProfile(createUserProfileDto, loggedInUserId);

      // Logging successful creation of user profile
      this.logger.log(`User profile created successfully`);

      return userProfile;
    } catch (error) {
      // Logging error details
      this.logger.error(`Error creating user profile: ${error.message}`);

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
  async getUserProfileById(@Param('id') id: string, @Req() req): Promise<UserProfile> {
    
    try {
      this.logRequestDetails(req, id);

      // Retrieve user profile by ID using the UserProfileService
      const userProfile = await this.userProfileService.getUserProfileById(id);

      if (!userProfile) {
        this.logger.warn(`User profile with ID ${id} not found`);
        throw new NotFoundException(`User profile with ID ${id} not found`);
      }

      this.logger.log(`User profile retrieved successfully: ${JSON.stringify(userProfile)}`);

      return userProfile;
    } catch (error) {
      this.logger.error(`Error retrieving user profile: ${error.message}`);
      throw error; // Rethrow the error to be handled by global error handler
    }
  }

  private logRequestDetails(req, id: string): void {
    this.logger.log(`Received request to retrieve user profile with ID: ${id}`);
    this.logger.log(`Request Method: ${req.method}`);
    this.logger.log(`Request URL: ${req.url}`);

    // Logging request headers
    this.logger.log('Request Headers:');
    for (const key of Object.keys(req.headers)) {
      this.logger.log(`${key}: ${req.headers[key]}`);
    }

    // Logging authenticated user (if available)
    if (req.user) {
      this.logger.log('Authenticated User:');
      this.logger.log(JSON.stringify(req.user));
    }
  }







  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateUserProfileById(@Req() req, @Param('id') id: string, @Body() updateUserProfileDto: any): Promise<UserProfile> {
    const loggedInUserId = req.user._id; // Extract user ID from the authenticated request
    return this.userProfileService.updateUserProfileById(id, updateUserProfileDto, loggedInUserId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteUserProfileById(@Req() req, @Param('id') id: string): Promise<any> {
    const loggedInUserId = req.user.userId; // Extract user ID from the authenticated request
    return this.userProfileService.deleteUserProfileById(id, loggedInUserId);
  }
}
