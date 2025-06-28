import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { Order } from 'src/orders/entities/order.entity';
import { notify } from 'src/lib/utils';
import { Customer } from 'src/customers/entities/customer.entity';

@Injectable()
export class CustomerOrderAssignedListener {
  @OnEvent('order.assigned')
  handleOrderAssigned({order, customer}: { order: Order, customer: Customer }) {

    notify.customer(
      'Tenemos un Rider para ti! 🚴‍♂️',
      `${customer.name} Ya tenemos un rider yendo en busca de la orden ${order.id}!`
    )
  }
}
