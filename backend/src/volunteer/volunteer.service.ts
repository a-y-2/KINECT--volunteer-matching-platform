import { Injectable } from '@nestjs/common';//to mark a class as a provider that can be injected into other classes
import { InjectModel } from '@nestjs/mongoose';//to inject a Mongoose model into a NestJS provider
import { Volunteer, VolunteerDocument } from './volunteer.schema';//
import { CreateVolunteerProfileDto } from './create-volunteer-profile.dto'; //classes that define the shape of data used for creating and updating volunteer profiles.
import {UpdateVolunteerProfileDto} from './update-volunteer-profile.dto';
import mongoose from 'mongoose';

@Injectable()
export class VolunteerService {
  constructor(
    /*
    Injects the Mongoose model corresponding to the Volunteer schema (Volunteer.name) into the 
    volunteerModel property of the service. The volunteerModel is now available for performing database operations
    */
    @InjectModel(Volunteer.name) private readonly volunteerModel: mongoose.Model<VolunteerDocument>,
  ) {}

  //takes a CreateVolunteerProfileDto object as input, which contains data for creating the profile.
   async createVolunteerProfile(
    createVolunteerProfileDto: any, // Assuming it includes userId
    loggedInUserId: string,
  ): Promise<Volunteer> {
      // Set the userId property (assuming it's present in DTO)
    createVolunteerProfileDto.userId = loggedInUserId;

    const newVolunteer = new this.volunteerModel(createVolunteerProfileDto);
    return await newVolunteer.save();
  }

  async getVolunteerProfileById(id: string): Promise<Volunteer | null> {
    return await this.volunteerModel.findById(id).populate('userId', '-password'); // Exclude password
  }

  async updateVolunteerProfileById(
    id: string,
    updateVolunteerProfileDto: UpdateVolunteerProfileDto,
    //The { new: true } option ensures that the updated document is returned after the update operation.
  ): Promise<Volunteer | null> {
    return await this.volunteerModel.findByIdAndUpdate(id, updateVolunteerProfileDto, { new: true });
  }

  async deleteVolunteerProfileById(id: string): Promise<any> {
    return await this.volunteerModel.findByIdAndDelete(id);
  }
}
