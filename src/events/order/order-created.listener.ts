import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { RidersService } from 'src/riders/riders.service';
import { OrdersService } from 'src/orders/orders.service';
import { Order } from 'src/orders/entities/order.entity';


@Injectable()
export class OrderCreatedListener {
    @OnEvent('order.created')
    handleOrderCreated(order: Order) {
        console.log(`ORDEN CREADA - ⚙️ NOTIFICACIÓN SISTEMA: Una nueva orden entró al sistema. Orden ID: ${order.id}, Cliente ID: ${order.customerId}, Vendedor ID: ${order.sellerId}.`);
    }
}
