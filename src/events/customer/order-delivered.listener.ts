import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { Order } from 'src/orders/entities/order.entity';
import { notify } from 'src/lib/utils';
import { Customer } from 'src/customers/entities/customer.entity';

@Injectable()
export class CustomerOrderDeliveredListener {

  @OnEvent('order.delivered')
  handleOrderDelivered({order, customer}: { order: Order; customer: Customer }) {

    notify.customer(
      'Orden Entregada! 🎉',
      `Hola ${customer!.name}, su orden ${order.id} ha sido entregada! Gracias por elegirnos. Esperamos que disfrute su compra!`
    )
  }
}
