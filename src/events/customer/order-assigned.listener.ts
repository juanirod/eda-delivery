import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { Order } from 'src/orders/entities/order.entity';

@Injectable()
export class CustomerOrderAssignedListener {
  @OnEvent('order.assigned')
  handleOrderAssigned(order: Order) {
    console.log(`ORDEN ASIGNADA A UN RIDER - 🤩 NOTIFICACIÓN CLIENTE:${order.customerId} Ya tenemos un rider yendo en busca de la orden ${order.id}! `);
  }
}
