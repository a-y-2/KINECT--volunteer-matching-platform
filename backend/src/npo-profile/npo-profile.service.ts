import { BadRequestException, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NpoProfile, NpoProfileDocument } from './entities/npo-profile.schema';
import { Npo, NpoDocument } from '../npo/npo.model';
import { NotFoundException } from '@nestjs/common'; // Import NotFoundException
import mongoose, { Types } from 'mongoose';
import { CreateNpoProfileDto } from './dto/create-npo-profile.dto';


@Injectable()
export class NpoProfileService {
  private readonly logger = new Logger(NpoProfileService.name);
  constructor(
    //@InjectLogger(NpoProfileService.name) private readonly logger: Logger,
    @InjectModel(NpoProfile.name)
    private readonly npoProfileModel: mongoose.Model<NpoProfileDocument>,
    @InjectModel(Npo.name)
    private readonly npoModel: mongoose.Model<NpoDocument>,
  ) {}

  async createNpoProfile(
    createNpoProfileDto: CreateNpoProfileDto, 
    loggedInNpoId: string,
    // loggedInNpoId: mongoose.Types.ObjectId,
  ): Promise<NpoProfile> {
    const npo = await this.npoModel.findById(loggedInNpoId);
    if (!npo) {
      throw new NotFoundException('Npo not found');
    }

    const newNpoProfile = new this.npoProfileModel({
      ...createNpoProfileDto,
      npo: npo, 
    });
    return await newNpoProfile.save();
  }

  // async getUserProfileById(id: string): Promise<UserProfile | null> {
  //   return await this.userProfileModel.findById(id).populate('user', '-password'); // Exclude password
  // }

  async getNpoProfileById(id: string): Promise<NpoProfileDocument> {
    if (!Types.ObjectId.isValid(id))
      throw new BadRequestException('Invalid npo ID.');

    const npo = await this.npoProfileModel.findById(id);

    if (!npo) throw new NotFoundException('Npo not found.');

    return npo;
  }



  async updateNpoProfileById(
    id: string,
    updateNpoProfileDto: any,
    loggedInNpoId: string,
  ): Promise<NpoProfile | null> {
    const npoProfile = await this.npoProfileModel.findById(id);
    if (!npoProfile) {
      throw new NotFoundException('Npo profile not found');
    }

//   this.logger.log(`npoProfile.npo._id: ${npoProfile.npo._id.toString()}`);
//     this.logger.log(`loggedInNpoId: ${loggedInUserId}`);
//     this.logger.log(`Comparison result: ${userProfile.user._id.toString() !== loggedInUserId}`);
//     this.logger.log(`userProfile.user._id data type: ${typeof userProfile.user._id}`);
// this.logger.log(`loggedInUserId data type: ${typeof loggedInUserId}`);


    if (npoProfile.npo._id.toString() !== loggedInNpoId.toString()) {
      throw new UnauthorizedException('Unauthorized access');
    }

    // Update only allowed fields (optional)
    const allowedUpdates = ['name','description','location','website','contactEmail','logo','missionStatement','areasOfFocus','foundingYear','socialMediaLinks','images','opportunities'];
    const update = Object.keys(updateNpoProfileDto)
      .filter((key) => allowedUpdates.includes(key))
      .reduce((acc, key) => ({ ...acc, [key]: updateNpoProfileDto[key] }), {});

    return await this.npoProfileModel.findByIdAndUpdate(id, update, { new: true });

  }


  async deleteNpoProfileById(id: string, loggedInNpoId: string): Promise<any> {
    // ... other checks
  
    const deletedProfile = await this.npoProfileModel.findByIdAndDelete(id);
    if (!deletedProfile) {
      throw new NotFoundException('npo profile not found');
    }
    return { message: 'npo profile deleted successfully' };
  }
}
