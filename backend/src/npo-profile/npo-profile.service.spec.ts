import { Test, TestingModule } from '@nestjs/testing';
import { NpoProfileService } from './npo-profile.service';

describe('NpoProfileService', () => {
  let service: NpoProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NpoProfileService],
    }).compile();

    service = module.get<NpoProfileService>(NpoProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
