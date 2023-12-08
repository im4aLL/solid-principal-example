import { Module } from '@nestjs/common';
import { IspService } from './isp.service';

@Module({
  controllers: [],
  providers: [IspService],
  exports: [],
})
export class IspModule {}
