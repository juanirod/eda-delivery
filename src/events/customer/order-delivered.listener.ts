import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { Order } from 'src/orders/entities/order.entity';

@Injectable()
export class CustomerOrderDeliveredListener {
  @OnEvent('order.delivered')
  handleOrderDelivered(order: Order) {
    console.log(`ORDEN ENTREGADA - 🤩 NOTIFICACIÓN CLIENTE:${order.customerId}, su orden ${order.id} ha sido entregada!`);
  }
}
