import { Controller, Get } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

@Controller('dip')
export class LogController {
  constructor(private analyticsService: AnalyticsService) {}

  @Get()
  testLog() {
    return this.analyticsService.log('message');
  }
}
