import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { Order } from 'src/orders/entities/order.entity';

@Injectable()
export class CustomerOrderCreatedListener {
    @OnEvent('order.created')
    handleOrderCreated(order: Order) {
        console.log(`ORDEN CREADA - 🤩 NOTIFICACIÓN CLIENTE: ${order.customerId}, su orden ${order.id} está siendo procesada `);
    }
}
