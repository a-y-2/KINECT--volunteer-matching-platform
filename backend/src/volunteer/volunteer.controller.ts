import { Controller, Get, Param, Post, Put, Delete, Body, UsePipes, ValidationPipe, Req } from '@nestjs/common';
import { VolunteerService } from './volunteer.service';
import { CreateVolunteerProfileDto } from './create-volunteer-profile.dto'; 
import {UpdateVolunteerProfileDto} from './update-volunteer-profile.dto';

@Controller('volunteers')//base route prefix for all routes defined within this controller
export class VolunteerController {

    /*
    This is the constructor of the VolunteerController class. It injects an instance of VolunteerService into the 
    controller via dependency injection, making the volunteerService instance available for use within the controller methods
    */
  constructor(private readonly volunteerService: VolunteerService) {}






  @Post() // Create volunteer profile

  /*
  ValidationPipe is a built-in class from NestJS that performs automatic data validation based on the rules defined in the DTO 
  (Data Transfer Object) class (CreateVolunteerProfileDto). This validation helps ensure that the incoming data is in the 
  expected format before processing it further
  */
  @UsePipes(new ValidationPipe()) 
  async createVolunteerProfile(
    @Body() createVolunteerProfileDto: CreateVolunteerProfileDto,
    @Req() request: any, // Access logged-in user ID
  ): Promise<any> {
    const loggedInUserId = request.user.id;
    return await this.volunteerService.createVolunteerProfile(createVolunteerProfileDto, loggedInUserId);
  }




/*
The @Get(':id') decorator specifies that this method handles HTTP GET requests with a dynamic route parameter :id. 
This means the endpoint will be accessible at /volunteers/:id, where :id represents the unique identifier (ID) of the
volunteer profile to be retrieved.
*/
  @Get(':id') // Get profile by ID
  //The @Param('id') decorator is used to extract the value of the id parameter from the request URL
  async getVolunteerProfileById(@Param('id') id: string): Promise<any> {
    return await this.volunteerService.getVolunteerProfileById(id);
  }





  @Put(':id') // Update profile
  @UsePipes(new ValidationPipe())
  async updateVolunteerProfileById(
    @Param('id') id: string,
    @Body() updateVolunteerProfileDto: UpdateVolunteerProfileDto,): Promise<any> {
    return await this.volunteerService.updateVolunteerProfileById(id, updateVolunteerProfileDto);
  }





  @Delete(':id') // Delete profile
  async deleteVolunteerProfileById(@Param('id') id: string): Promise<any> {
    // 
    const deleteResponse = await this.volunteerService.deleteVolunteerProfileById(id);
    if (deleteResponse) {
      return { message: 'Volunteer profile deleted successfully' };
    } else {
      return { message: 'Volunteer profile deletion failed' }; 
    }
  }
}
