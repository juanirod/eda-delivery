import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { Order } from 'src/orders/entities/order.entity';

@Injectable()
export class CustomerOrderPickedUpListener {
  @OnEvent('order.picked_up')
  handleOrderPickedUp(order: Order) {
    console.log(`ORDEN RECOGIDA - 🤩 NOTIFICACION CLIENTE: Estimado cliente ${order.customerId}, su orden ${order.id} está en camino`);
  }
}
