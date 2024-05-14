import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { User } from './user.model';
import * as bcrypt from 'bcryptjs';

// Mock User model and JwtService
const mockUserModel = {
  findOne: jest.fn(),
  findById: jest.fn(),
};

const mockJwtService = {
  sign: jest.fn(() => 'mockedToken'),
};

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: getModelToken(User.name), useValue: mockUserModel },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('login', () => {
    it('should return a token on successful login', async () => {
      const mockUser = { _id: 'mockUserId', email: 'test@example.com', password: await bcrypt.hash('password', 10) };
      mockUserModel.findOne.mockResolvedValue(mockUser);

      const result = await authService.login('test@example.com', 'password');
      expect(result.token).toEqual('mockedToken');
      expect(mockUserModel.findOne).toBeCalledWith({ email: 'test@example.com' });
      expect(mockJwtService.sign).toBeCalledWith({ userId: 'mockUserId' });
    });

    it('should return an error message on invalid email or password', async () => {
      mockUserModel.findOne.mockResolvedValue(null);

      const result = await authService.login('invalid@example.com', 'password');
      expect(result.token).toBeNull();
      expect(result.message).toEqual('Invalid email or password');
    });
  });

  describe('validateUserByJwt', () => {
    it('should return a user if valid JWT payload', async () => {
      const mockUser = { _id: 'mockUserId' };
      mockUserModel.findById.mockResolvedValue(mockUser);

      const payload = { userId: 'mockUserId' };
      const result = await authService.validateUserByJwt(payload);
      expect(result).toEqual(mockUser);
      expect(mockUserModel.findById).toBeCalledWith('mockUserId');
    });

    it('should return null if user not found for JWT payload', async () => {
      mockUserModel.findById.mockResolvedValue(null);

      const payload = { userId: 'invalidUserId' };
      const result = await authService.validateUserByJwt(payload);
      expect(result).toBeNull();
      expect(mockUserModel.findById).toBeCalledWith('invalidUserId');
    });
  });
});
