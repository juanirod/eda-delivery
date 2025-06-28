import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { Order } from 'src/orders/entities/order.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Seller } from 'src/sellers/entities/seller.entity';
import { notify } from 'src/lib/utils';

@Injectable()
export class CustomerOrderCreatedListener {
    @OnEvent('order.created')
    handleOrderCreated({order, customer, seller}: { order: Order; customer: Customer; seller: Seller }) {
        notify.customer(
            'Orden Creada! 🛒',
            `Hola ${customer.name}, tu orden ${order.id} ha sido creada y está siendo procesada por el local ${seller.name}. ¡Gracias por tu compra!`
        )
    }
}
