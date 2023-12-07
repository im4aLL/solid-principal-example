import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { EmailService } from './email.service';

@Injectable()
export class OrderService {
  constructor(private emailService: EmailService) {}

  create(createOrderDto: CreateOrderDto): Order {
    const order = {
      id: this.readableRandomStringMaker(),
      createdAt: new Date().toISOString(),
      ...createOrderDto,
    };

    // bad example ✖
    // "Each module should do one thing and do it well."
    this.emailService.sendOrderEmail(order);

    return order;
  }

  readableRandomStringMaker(length = 5): string {
    return Math.random().toString(20).substr(2, length);
  }
}
