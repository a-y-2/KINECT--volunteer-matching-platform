import { VolunteerService } from './volunteer.service';
import { CreateVolunteerProfileDto } from './create-volunteer-profile.dto';
import { UpdateVolunteerProfileDto } from './update-volunteer-profile.dto';
export declare class VolunteerController {
    private readonly volunteerService;
    constructor(volunteerService: VolunteerService);
    createVolunteerProfile(createVolunteerProfileDto: CreateVolunteerProfileDto, request: any): Promise<any>;
    getVolunteerProfileById(id: string): Promise<any>;
    updateVolunteerProfileById(id: string, updateVolunteerProfileDto: UpdateVolunteerProfileDto): Promise<any>;
    deleteVolunteerProfileById(id: string): Promise<any>;
}
