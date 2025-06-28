import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { RidersService } from 'src/riders/riders.service';
import { OrdersService } from 'src/orders/orders.service';
import { Order } from 'src/orders/entities/order.entity';


@Injectable()
export class CustomerOrderConfirmedListener {

    @OnEvent('order.confirmed')
    handleOrderConfirmed(order: Order) {
        console.log(`ORDEN CONFIRMADA - 🤩 NOTIFICACIÓN CLIENTE: ${order.customerId}, tu orden ${order.id} ha sido confirmada por el local y se está asignando un rider`);
    }
}
