import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { getModelToken } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { User } from './user.model';
import * as bcrypt from 'bcryptjs';

describe('AuthService', () => {
  let service: AuthService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: getModelToken(User.name),
          useValue: {
            findOne: jest.fn(),
            findById: jest.fn(),
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn().mockImplementation((payload: any) => 'mockedToken'), // Mock sign method to return a dummy token
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('login', () => {
    it('should return a token when valid credentials are provided', async () => {
      const userMock = {
        _id: 'someUserId',
        email: 'test@example.com',
        password: await bcrypt.hash('password', 10), // Hashed password
      };

      jest.spyOn(service['userModel'], 'findOne').mockResolvedValue(userMock);
      jest.spyOn(bcrypt, 'compare').mockResolvedValue(true);

      const { token } = await service.login('test@example.com', 'password');

      expect(token).toBeDefined();
      expect(typeof token).toBe('string');
    });

    it('should return null token and error message when invalid credentials are provided', async () => {
      jest.spyOn(service['userModel'], 'findOne').mockResolvedValue(null);

      const { token, message } = await service.login('test@example.com', 'password');

      expect(token).toBeNull();
      expect(message).toBe('Invalid email or password');
    });

    it('should handle errors during login', async () => {
      jest.spyOn(service['userModel'], 'findOne').mockRejectedValue(new Error('Database error'));

      await expect(service.login('test@example.com', 'password')).rejects.toThrowError('Internal server error');
    });
  });

  describe('validateUserByJwt', () => {
    it('should return user when valid payload is provided', async () => {
      const userId = 'someUserId';
      const userMock = { _id: userId, email: 'test@example.com' };

      jest.spyOn(service['userModel'], 'findById').mockResolvedValue(userMock);

      const payload = { userId };
      const user = await service.validateUserByJwt(payload);

      expect(user).toEqual(userMock);
    });

   
})})