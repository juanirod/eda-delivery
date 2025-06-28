import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { RidersService } from 'src/riders/riders.service';
import { OrdersService } from 'src/orders/orders.service';
import { Order } from 'src/orders/entities/order.entity';


@Injectable()
export class OrderConfirmedListener {
    constructor(
        private ridersService: RidersService,
        private ordersService: OrdersService,
    ) { }
    @OnEvent('order.confirmed')
    handleOrderConfirmed(order: Order) {
        const rider = this.ridersService.findAvailable();

        if (rider) {
            this.ordersService.assignRider(order.id, rider.id);
        }

    }
}
