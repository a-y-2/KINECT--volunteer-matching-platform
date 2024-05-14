import { BadRequestException, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserProfile, UserProfileDocument } from './user-profile.schema';
import { User, UserDocument } from '../user/user.model';
import { NotFoundException } from '@nestjs/common'; // Import NotFoundException
import mongoose, { Types } from 'mongoose';
import { CreateUserProfileDto } from './user-profile.dto';


@Injectable()
export class UserProfileService {
  private readonly logger = new Logger(UserProfileService.name);
  constructor(
    //@InjectLogger(UserProfileService.name) private readonly logger: Logger,
    @InjectModel(UserProfile.name)
    private readonly userProfileModel: mongoose.Model<UserProfileDocument>,
    @InjectModel(User.name)
    private readonly userModel: mongoose.Model<UserDocument>,
  ) {}

  async createUserProfile(
    createUserProfileDto: CreateUserProfileDto, // Assuming it includes user data
    loggedInUserId: string,
  ): Promise<UserProfile> {
    const user = await this.userModel.findById(loggedInUserId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const newUserProfile = new this.userProfileModel({
      ...createUserProfileDto,
      user: user, // Set the user reference
    });
    return await newUserProfile.save();
  }



  // async getUserProfileById(id: string): Promise<UserProfile | null> {
  //   return await this.userProfileModel.findById(id).populate('user', '-password'); // Exclude password
  // }

  async getUserProfileById(id: string): Promise<UserProfileDocument> {
    if (!Types.ObjectId.isValid(id))
      throw new BadRequestException('Invalid user ID.');

    const user = await this.userProfileModel.findById(id);

    if (!user) throw new NotFoundException('User not found.');

    return user;
  }


 async getParentDocumentId(userId: string): Promise<string | null> {
    try {
      const document = await this.userProfileModel.findOne({ 'user._id': userId });

      if (document) {
        return document._id;
      } else {
        return null;
      }
    } catch (error) {
      // Handle any errors (e.g., database connection issues, query errors)
      console.error('Error occurred while querying user_profiles collection:', error);
      throw error; // Optionally rethrow the error for the caller to handle
    }
  }







  async updateUserProfileById(
    id: string,
    updateUserProfileDto: any,
    loggedInUserId: string,
  ): Promise<UserProfile | null> {
    const userProfile = await this.userProfileModel.findById(id);
    if (!userProfile) {
      throw new NotFoundException('User profile not found');
    }

  this.logger.log(`userProfile.user._id: ${userProfile.user._id.toString()}`);
    this.logger.log(`loggedInUserId: ${loggedInUserId}`);
    this.logger.log(`Comparison result: ${userProfile.user._id.toString() !== loggedInUserId}`);
    this.logger.log(`userProfile.user._id data type: ${typeof userProfile.user._id}`);
this.logger.log(`loggedInUserId data type: ${typeof loggedInUserId}`);


    if (userProfile.user._id.toString() !== loggedInUserId.toString()) {
      throw new UnauthorizedException('Unauthorized access');
    }

    // Update only allowed fields (optional)
    const allowedUpdates = ['photo', 'phone', 'city', 'state', 'zipcode', 'daysOfWeekAvailable', 'skills', 'past', 'motivation', 'certificates'];
    const update = Object.keys(updateUserProfileDto)
      .filter((key) => allowedUpdates.includes(key))
      .reduce((acc, key) => ({ ...acc, [key]: updateUserProfileDto[key] }), {});

    return await this.userProfileModel.findByIdAndUpdate(id, update, { new: true });
  }











  async deleteUserProfileById(id: string, loggedInUserId: string): Promise<any> {
    // ... other checks
  
    const deletedProfile = await this.userProfileModel.findByIdAndDelete(id);
    if (!deletedProfile) {
      throw new NotFoundException('User profile not found');
    }
    return { message: 'User profile deleted successfully' };
  }
  
}





























