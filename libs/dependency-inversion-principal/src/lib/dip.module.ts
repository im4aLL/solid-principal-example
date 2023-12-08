import { Module } from '@nestjs/common';
import { GoogleAnalyticsService } from './google-analytics.service';
import { LogController } from './log.controller';
import { AnalyticsService } from './analytics.service';

@Module({
  controllers: [LogController],
  providers: [{ provide: AnalyticsService, useClass: GoogleAnalyticsService }],
  exports: [],
})
export class DipModule {}
