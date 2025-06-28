import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { Order } from 'src/orders/entities/order.entity';
import { notify } from 'src/lib/utils';
import { Customer } from 'src/customers/entities/customer.entity';
import { RidersService } from 'src/riders/riders.service';

@Injectable()
export class RiderOrderDeliveredListener {

    constructor(private ridersService: RidersService) { }

    @OnEvent('order.delivered')
    handleOrderDelivered({ order }: { order: Order }) {
        this.ridersService.markAvailable(order.riderId!);
        notify.rider(
            'Orden Entregada! 🎉',
            `La orden ${order.id} ha sido entregada exitosamente. ¡Buen trabajo!`
        )
    }
}
