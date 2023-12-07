import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SrpModule } from '@test/srp';
import { OcpModule } from '@test/ocp';

@Module({
  imports: [SrpModule, OcpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
