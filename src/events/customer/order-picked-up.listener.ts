import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { Order } from 'src/orders/entities/order.entity';
import { notify } from 'src/lib/utils';
import { Customer } from 'src/customers/entities/customer.entity';

@Injectable()
export class CustomerOrderPickedUpListener {

  @OnEvent('order.picked_up')
  handleOrderPickedUp({order, customer}: { order: Order, customer: Customer }) {

    notify.customer(
      'Orden Recogida! 🚚',
      `Estimado cliente ${customer!.name}, su orden ${order.id} está en camino. ¡Gracias por su paciencia!`
    );
  }
}
