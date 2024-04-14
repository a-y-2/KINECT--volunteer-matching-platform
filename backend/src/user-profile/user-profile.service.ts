import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserProfile, UserProfileDocument } from './user-profile.schema';
import { User, UserDocument } from '../user/user.model';
import { NotFoundException } from '@nestjs/common'; // Import NotFoundException
import mongoose from 'mongoose';
import { CreateUserProfileDto } from './user-profile.dto';
@Injectable()
export class UserProfileService {
  constructor(
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

  async getUserProfileById(id: string): Promise<UserProfile | null> {
    return await this.userProfileModel.findById(id).populate('user', '-password'); // Exclude password
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

    if (userProfile.user._id.toString() !== loggedInUserId) {
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
