import { Module } from '@nestjs/common';
import { OrdersModule } from 'src/orders/orders.module';
import { RidersModule } from 'src/riders/riders.module';
import { CustomerOrderConfirmedListener } from './customer/order-confirmed.listener';
import { CustomerOrderCreatedListener } from './customer/order-created.listener';
import { CustomerOrderDeliveredListener } from './customer/order-delivered.listener';
import { CustomerOrderPickedUpListener } from './customer/order-picked-up.listener';
import { OrderConfirmedListener } from './order/order-confirmed.listener';
import { OrderCreatedListener } from './order/order-created.listener';
import { RiderOrderAssignedListener } from './rider/order-assigned.listener';
import { SellerOrderAssginedListener } from './seller/order-assigned.listener';
import { SellerOrderCreatedListener } from './seller/order-created.listener';
import { CustomerOrderAssignedListener } from './customer/order-assigned.listener';


@Module({
    imports: [OrdersModule, RidersModule],
    providers: [
        CustomerOrderConfirmedListener,
        CustomerOrderCreatedListener,
        CustomerOrderDeliveredListener,
        CustomerOrderPickedUpListener,
        CustomerOrderAssignedListener,
        OrderConfirmedListener,
        OrderCreatedListener,
        RiderOrderAssignedListener,
        SellerOrderAssginedListener,
        SellerOrderCreatedListener
    ]
})
export class EventsModule { }