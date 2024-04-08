import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('npo')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: { name: string; password: string }) {
  //try {
    const user = await this.authService.login(loginDto.name, loginDto.password);
    if (typeof user === 'string') {
      throw new HttpException(user, HttpStatus.BAD_REQUEST);
    }
    
    // Send successful login response with user data (excluding sensitive info)
 // } catch (error) {
    // Handle login errors (e.g., invalid credentials)
    
  //}
  return user;
}

}
