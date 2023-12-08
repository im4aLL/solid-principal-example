import { Injectable } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

@Injectable()
export class GoogleAnalyticsService implements AnalyticsService {
  log(str: string): string {
    return `sending log ${str} using google analytics`;
  }
}
