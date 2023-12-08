import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SrpModule } from '@test/srp';
import { OcpModule } from '@test/ocp';
import { LspModule } from '@test/lsp';

@Module({
  imports: [SrpModule, OcpModule, LspModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
