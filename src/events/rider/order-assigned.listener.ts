import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { Order } from 'src/orders/entities/order.entity';
import { notify } from 'src/lib/utils';
import { Rider } from 'src/riders/entities/rider.entity';

@Injectable()
export class RiderOrderAssignedListener {


  @OnEvent('order.assigned')
  handleOrderAssigned({ order, rider }: { order: Order, rider: Rider }) {
    notify.rider(
      'Nueva Orden Asignada! 🚴',
      `${rider!.name}, tienes una nueva orden: ${order.id}. Por favor, revisa los detalles y procede a recogerla.`
    )
  }
}
