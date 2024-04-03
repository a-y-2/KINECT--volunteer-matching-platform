import { Body, Controller, Post, Session } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('register')
    async register(
    @Body() {email, password, firstName, lastName,skills,interests}: CreateUserDto,
    @Session() session: any
  ) {
    const user = await this.userService.register(email, password, firstName, lastName,skills,interests);

    // const { _id, isAdmin } = user;

    // const { accessToken } = await this.userService.login(name, user._id);

    // const loggedUser = {
    //   name: user.name,
    //   _id,
    //   isAdmin,
    //   email: user.email,
    //   accessToken,
    // };

    // session.user = loggedUser;

    return user;
  }


//   @Post('register')
//   async register(@Body() createUserDto: CreateUserDto) {
//     const newUser = await this.userService.create(createUserDto);
//     // Return a success response with the created user (optional)
//     return newUser;
//   }
}


