import { Injectable } from '@nestjs/common';
import { INotification } from './interfaces/notification.interface';
import { IEmailNotification } from './interfaces/email-notification.interface';
import { ISmsNotification } from './interfaces/sms-notification.interface';
import { IPushNotification } from './interfaces/push-notification.interface';

@Injectable()
export class IspService {
  // bad
  badSendEmail(data: INotification) {
    console.log(`Sending email to ${data.to}`);
  }

  // good
  sendEmail(data: IEmailNotification) {
    console.log(`Sending email to ${data.to}`);
  }

  sendSMS(data: ISmsNotification) {
    console.log(`Sending sms to ${data.phoneNumber}`);
  }

  sendPush(data: IPushNotification) {
    console.log(`push notification to ${data.userId}`);
  }
}
