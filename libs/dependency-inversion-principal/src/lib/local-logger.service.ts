import { Injectable } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

@Injectable()
export class LocalLoggerService implements AnalyticsService {
  log(str: string): string {
    return `sending log ${str} using local logger`;
  }
}
