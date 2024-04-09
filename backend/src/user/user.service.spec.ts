import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getModelToken } from '@nestjs/mongoose';//Imports getModelToken function from the @nestjs/mongoose module. This function is used to retrieve the token for a specified model class, which is needed to mock model injections.
import { User, UserDocument } from './user.model';
import * as bcrypt from 'bcryptjs';

//describe('UserService', () => { ... }): This block groups tests related to UserService
describe('UserService', () => {
  let service: UserService; //  declares a variable to hold a reference to the service.

//creates a mock object for the User model, replacing its actual database interactions.
  const userModelMock = {
    create: jest.fn(),
  };

//This runs before each test, setting up the testing environment
  beforeEach(async () => {

/*
Test.createTestingModule function from @nestjs/testing : to create a new testing module. 
The function takes an object as an argument, configuring the module's providers
*/
    const module: TestingModule = await Test.createTestingModule({//creates a testing module specifically for unit testing the UserService
      providers: [
        UserService,
        {
          provide: getModelToken(User.name),
          useValue: userModelMock,
        },
      ],
    }).compile();
    /*
    the compile method is called on the partially configured testing module. This method finalizes the module creation process,
    making it ready for use in your tests.
    */


    //this gets an instance of the UserService within the testing module.
    service = module.get<UserService>(UserService);
  });

  //
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('register', () => {
    it('should create a new user with hashed password', async () => {
      const mockUserInput = {
        email: 'test@example.com',
        password: 'password123',
        firstName: 'John',
        lastName: 'Doe',
        zipcode:'10000',
        city:'nyc',
        state:'nyc',
        dob: new Date('1990-01-01'),
        skills: ['JavaScript', 'Node.js'],
        interests: ['Reading', 'Sports'],
      };

      const expectedUser: any = {
        _id: 'mockId',
        ...mockUserInput,
        password: 'hashedPassword', // Simulated hashed password
      };

      // Mock bcrypt.hash to return a fixed value for testing
      jest.spyOn(bcrypt, 'hash').mockResolvedValue('hashedPassword');

      userModelMock.create.mockResolvedValue(expectedUser);

      const mockUserInputObject = {
        ...mockUserInput, // Spread operator includes all properties
      };
      
      const result = await service.register(mockUserInputObject);
      
      expect(result).toEqual(expectedUser);

      // Verify that create method was called with the correct arguments
      expect(userModelMock.create).toHaveBeenCalledWith({
        email: mockUserInput.email,
        password: 'hashedPassword',
        firstName: mockUserInput.firstName,
        lastName: mockUserInput.lastName,
        zipcode: mockUserInput.zipcode,
        city: mockUserInput.city,
        state: mockUserInput.state,
        dob: mockUserInput.dob,
        skills: mockUserInput.skills,
        interests: mockUserInput.interests,
      });

      // Verify that bcrypt.hash was called with the correct password and salt
      expect(bcrypt.hash).toHaveBeenCalledWith(
        mockUserInput.password,
        expect.any(String),
      );
    });
  });

  
});
