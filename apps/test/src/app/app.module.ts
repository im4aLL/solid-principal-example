import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SrpModule } from '@test/srp';
import { OcpModule } from '@test/ocp';
import { LspModule } from '@test/lsp';
import { IspModule } from '@test/isp';
import { DipModule } from '@test/dip';

@Module({
  imports: [SrpModule, OcpModule, LspModule, IspModule, DipModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
