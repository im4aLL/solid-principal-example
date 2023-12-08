import { Injectable } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

@Injectable()
export class MixpanelService implements AnalyticsService {
  log(str: string): string {
    return `sending log ${str} using mixpanel sdk`;
  }
}
