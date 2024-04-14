import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Req, NotFoundException } from '@nestjs/common';
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
  constructor(private readonly userProfileService: UserProfileService) {}

@UseGuards(JwtAuthGuard)
@Post('protected')
async createUserProfile(@Req() req, @Body() createUserProfileDto: CreateUserProfileDto): Promise<UserProfile> {
  try {
    if (!req.user || !req.user.userId) {
      throw new NotFoundException('User not authenticated or userId not provided');
    }

    const loggedInUserId = req.user.userId; // Extract user ID from the authenticated request
    const userProfile = await this.userProfileService.createUserProfile(createUserProfileDto, loggedInUserId);
    return userProfile;
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error; // Rethrow the error to be handled by global error handler
  }
}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUserProfileById(@Param('id') id: string): Promise<UserProfile> {
    return this.userProfileService.getUserProfileById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateUserProfileById(@Req() req, @Param('id') id: string, @Body() updateUserProfileDto: any): Promise<UserProfile> {
    const loggedInUserId = req.user.userId; // Extract user ID from the authenticated request
    return this.userProfileService.updateUserProfileById(id, updateUserProfileDto, loggedInUserId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteUserProfileById(@Req() req, @Param('id') id: string): Promise<any> {
    const loggedInUserId = req.user.userId; // Extract user ID from the authenticated request
    return this.userProfileService.deleteUserProfileById(id, loggedInUserId);
  }
}
