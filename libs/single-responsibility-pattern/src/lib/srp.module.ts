import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { EmailService } from './email.service';
import { SrpController } from './srp.controller';

@Module({
  controllers: [SrpController],
  providers: [OrderService, EmailService],
  exports: [],
})
export class SrpModule {}
