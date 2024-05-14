import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { getModelToken } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

describe('AuthService', () => {
  let authService: AuthService;
  let jwtService: JwtService;

  const mockNpoModel = {
    findOne: jest.fn(),
  };

  const mockJwtService = {
    sign: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: getModelToken('Npo'), useValue: mockNpoModel },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  describe('login', () => {
    it('should return token on successful login', async () => {
      const mockNpo = { _id: 'mockId', name: 'testNpo', password: await bcrypt.hash('password', 10) };
      mockNpoModel.findOne.mockResolvedValue(mockNpo);
      mockJwtService.sign.mockReturnValue('mockToken');

      const result = await authService.login('testNpo', 'password');
      expect(result.token).toEqual('mockToken');
      expect(mockNpoModel.findOne).toHaveBeenCalledWith({ name: 'testNpo' });
      expect(mockJwtService.sign).toHaveBeenCalledWith({ npoId: 'mockId' });
    });

    it('should return error message on failed login', async () => {
      mockNpoModel.findOne.mockResolvedValue(null);

      const result = await authService.login('nonExistingNpo', 'invalidPassword');
      expect(result.token).toBeNull();
      expect(result.message).toEqual('Invalid name or password');
    });
  });

  // Add more test cases for other AuthService methods (validateNpoByJwt, etc.)
});
