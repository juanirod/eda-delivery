import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { Order } from 'src/orders/entities/order.entity';
import { notify } from 'src/lib/utils';
import { Customer } from 'src/customers/entities/customer.entity';


@Injectable()
export class CustomerOrderConfirmedListener {



    @OnEvent('order.confirmed')
    handleOrderConfirmed({order, customer}: { order: Order; customer: Customer }) {

        notify.customer(
            'Orden Confirmada! 🎉',
            `Hola ${customer!.name}, tu orden ${order.id} ya ha sido confirmada por el local y se está asignando un rider.`
        )

    }
}
