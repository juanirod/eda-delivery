import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { Order } from 'src/orders/entities/order.entity';

@Injectable()
export class RiderOrderAssignedListener {
  @OnEvent('order.assigned')
  handleOrderAssigned(order: Order) {
    console.log(`ORDEN ASIGNADA A UN RIDER - 🚴 NOTIFICACIÓN RIDER: Rider ${order.riderId}, tienes una nueva orden: ${order.id}`);
  }
}
