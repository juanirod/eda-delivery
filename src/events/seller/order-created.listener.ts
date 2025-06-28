import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { Order } from 'src/orders/entities/order.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Seller } from 'src/sellers/entities/seller.entity';
import { notify } from 'src/lib/utils';

@Injectable()
export class SellerOrderCreatedListener {
    @OnEvent('order.created')
    handleOrderCreated({ order, customer, seller }: { order: Order; customer: Customer; seller: Seller }) {

        notify.seller(
            'Nueva Orden! 🛒',
            `Hola ${seller.name}, tienes una nueva orden ${order.id} creada por el cliente ${customer.name}. Por favor, revisa los detalles de la orden y confirma tu disponibilidad para procesarla.`
        )
    }
}
