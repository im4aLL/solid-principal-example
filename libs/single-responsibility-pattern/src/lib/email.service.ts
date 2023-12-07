import { Injectable } from '@nestjs/common';
import { Order } from './entities/order.entity';

@Injectable()
export class EmailService {
  sendOrderEmail(order: Order) {
    console.log(`Sending email for order ${order.id}`);
  }
}
