import { Test, TestingModule } from '@nestjs/testing';
import { GasUsageService } from './gas-usage.service';

describe('GasUsageService', () => {
  let service: GasUsageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GasUsageService],
    }).compile();

    service = module.get<GasUsageService>(GasUsageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
