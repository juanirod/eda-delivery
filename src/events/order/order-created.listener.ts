import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { Order } from 'src/orders/entities/order.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Seller } from 'src/sellers/entities/seller.entity';


@Injectable()
export class OrderCreatedListener {
    @OnEvent('order.created')
    handleOrderCreated({order, customer, seller}: { order: Order; customer: Customer; seller: Seller }) {
        console.log(`ORDEN CREADA - ⚙️ NOTIFICACIÓN SISTEMA: Una nueva orden entró al sistema. Orden ID: ${order.id}, Cliente: ${customer.name}, Vendedor: ${seller.name}.`);
    }
}
