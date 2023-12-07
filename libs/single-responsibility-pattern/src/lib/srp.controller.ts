import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { EmailService } from './email.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';

@Controller('srp')
export class SrpController {
  constructor(
    private orderService: OrderService,
    private emailService: EmailService
  ) {}

  @Post()
  purchase(@Body() body: CreateOrderDto): Order {
    const order = this.orderService.create(body);

    // Good ✔
    // if (order) {
    //   this.emailService.sendOrderEmail(order);
    // }

    return order;
  }
}
