import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User,UserDocument} from './user.model';
import { CreateUserDto } from './user.dto';
import * as bcrypt from 'bcryptjs'; // Import for password hashing

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: any) {} // Inject User model

  async register(email: string, password: string, firstName: string, lastName: string,skills: string[],interests: string[]) {
    

    const encryptedPassword = await this.hashPassword(password);

    const user = await this.create({
      email,
      password: encryptedPassword,
      firstName,
      lastName,
      skills,
      interests
    });

    return user;
  }

  async create(user: Partial<UserDocument>): Promise<UserDocument> {
    const createdUser = await this.userModel.create(user);

    return createdUser;
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10); // Generate salt for password hashing
    return bcrypt.hash(password, salt); // Hash the password using bcrypt
  }
}
