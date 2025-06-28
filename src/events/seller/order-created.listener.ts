import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { Order } from 'src/orders/entities/order.entity';

@Injectable()
export class SellerOrderCreatedListener {
    @OnEvent('order.created')
    handleOrderCreated(order: Order) {
        console.log(`ORDEN CREADA - 🧑‍🍳 NOTIFICACIÓN VENDEDOR: ${order.sellerId},tiene una nueva orden ${order.id} creada por el cliente ${order.customerId}. Por favor, revise los detalles de la orden y confirme su disponibilidad para procesarla.`);
    }
}
