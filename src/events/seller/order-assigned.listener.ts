import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { Order } from 'src/orders/entities/order.entity';

@Injectable()
export class SellerOrderAssginedListener {
  @OnEvent('order.assigned')
  handleOrderAssigned(order: Order) {
    console.log(`ORDEN ASIGNADA A UN RIDER - 🧑‍🍳 NOTIFICACIÓN VENDEDOR: ${order.sellerId},un rider está en camino por la orden ${order.id}`);
  }
}
