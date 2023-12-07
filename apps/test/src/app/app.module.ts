import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SrpModule } from '@test/srp';

@Module({
  imports: [SrpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
