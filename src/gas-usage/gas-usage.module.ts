import { Module } from '@nestjs/common';
import { GasUsageController } from './gas-usage.controller';
import { GasUsageService } from './gas-usage.service';

@Module({
  controllers: [GasUsageController],
  providers: [GasUsageService]
})
export class GasUsageModule {}
