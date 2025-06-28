import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { Order } from 'src/orders/entities/order.entity';
import { notify } from 'src/lib/utils';
import { Seller } from 'src/sellers/entities/seller.entity';

@Injectable()
export class SellerOrderAssginedListener {
  @OnEvent('order.assigned')
  handleOrderAssigned({order, seller}: { order: Order, seller: Seller }) {
    notify.seller(
      'Orden Asignada a un Rider! 🚴‍♂️',
      `Hola ${seller!.name}, un rider está en camino por la orden ${order.id}. Por favor, asegúrate de que todo esté listo para la recogida.`
    )
  }
}
