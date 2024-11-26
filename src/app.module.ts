import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GasUsageModule } from './gas-usage/gas-usage.module';

@Module({
  imports: [GasUsageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
