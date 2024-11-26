import { Test, TestingModule } from '@nestjs/testing';
import { GasUsageController } from './gas-usage.controller';

describe('GasUsageController', () => {
  let controller: GasUsageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GasUsageController],
    }).compile();

    controller = module.get<GasUsageController>(GasUsageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
