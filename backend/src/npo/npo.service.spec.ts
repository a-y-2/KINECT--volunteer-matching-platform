// import { Test, TestingModule } from '@nestjs/testing';
// import { NpoService } from './npo.service';
// import { getModelToken } from '@nestjs/mongoose';//Imports getModelToken function from the @nestjs/mongoose module. This function is used to retrieve the token for a specified model class, which is needed to mock model injections.
// import { Npo, NpoDocument } from './npo.model';
// import * as bcrypt from 'bcryptjs';
// import { mock } from 'node:test';

// //describe('UserService', () => { ... }): This block groups tests related to UserService
// describe('NpoService', () => {
//   let service: NpoService; //  declares a variable to hold a reference to the service.

// //creates a mock object for the User model, replacing its actual database interactions.
//   const npoModelMock = {
//     create: jest.fn(),
//   };

// //This runs before each test, setting up the testing environment
//   beforeEach(async () => {

// /*
// Test.createTestingModule function from @nestjs/testing : to create a new testing module. 
// The function takes an object as an argument, configuring the module's providers
// */
//     const module: TestingModule = await Test.createTestingModule({//creates a testing module specifically for unit testing the UserService
//       providers: [
//         NpoService,
//         {
//           provide: getModelToken(Npo.name),
//           useValue: npoModelMock,
//         },
//       ],
//     }).compile();
//     /*
//     the compile method is called on the partially configured testing module. This method finalizes the module creation process,
//     making it ready for use in your tests.
//     */


//     //this gets an instance of the UserService within the testing module.
//     service = module.get<NpoService>(NpoService);
//   });

//   //
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });

//   describe('register', () => {
//     it('should create a new npo with hashed password', async () => {
//         const mockNpoInput = {
//             name: 'Test NPO', // Adjust based on your Npo model properties
//             email:'example@123.com',
//             password: 'password123',
//             description: 'A description of the NPO', // Add if applicable
//             website: 'https://www.example-npo.org', // Add if applicable
//             locations: ['New York, NY'], // Add if applicable
//             mission: 'The NPO\'s mission statement', // Add if applicable
//             causes: ['Education', 'Environment'], // Add if applicable
//             contactEmail: 'contact@example-npo.org', // Add if applicable
//             // socialMedia: {}, // Add if applicable
//           };

//       const expectedNpo: any = {
//         _id: 'mockId',
//         ...mockNpoInput,
//         password: 'hashedPassword', // Simulated hashed password
//       };

//       // Mock bcrypt.hash to return a fixed value for testing
//       jest.spyOn(bcrypt, 'hash').mockResolvedValue('hashedPassword');

//       npoModelMock.create.mockResolvedValue(expectedNpo);

//       const result = await service.register({
//         // Pass all NPO properties within a single object
//         name: mockNpoInput.name,
//         email:mockNpoInput.email,
//         password: mockNpoInput.password,
//         description: mockNpoInput.description,
//         website:mockNpoInput.website,
//         locations:mockNpoInput.locations,
//         mission:mockNpoInput.mission,
//         causes:mockNpoInput.causes,
//         contactEmail:mockNpoInput.contactEmail
//         // ... other NPO properties
//       });

//       expect(result).toEqual(expectedNpo);

//       // Verify that create method was called with the correct arguments
//       expect(npoModelMock.create).toHaveBeenCalledWith({
//         name: mockNpoInput.name,
//         email:mockNpoInput.email,
//         password: 'hashedPassword',
//         description: mockNpoInput.description,
//         website: mockNpoInput.website,
//         locations: mockNpoInput.locations,
//         mission: mockNpoInput.mission,
//         causes:mockNpoInput.causes,
//         contactEmail:mockNpoInput.contactEmail
//       });

//       // Verify that bcrypt.hash was called with the correct password and salt
//       expect(bcrypt.hash).toHaveBeenCalledWith(
//         mockNpoInput.password,
//         expect.any(String),
//       );
//     });
//   });

  
// });
