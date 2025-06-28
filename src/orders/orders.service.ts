import { Injectable } from '@nestjs/common';
import { Order } from './entities/order.entity';
import { v4 as uuid } from 'uuid';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class OrdersService {
    constructor(private eventEmitter: EventEmitter2) { }
    private orders: Order[] = [];

    create(customerId: string, sellerId: string): Order {
        const order: Order = {
            id: uuid(),
            customerId,
            sellerId,
            status: 'created',
            createdAt: new Date(),
        };
        this.orders.push(order);

        this.eventEmitter.emit('order.created', order);
        
        return order;
    }

    findAll() {
        return this.orders;
    }

    updateStatus(orderId: string, status: Order['status']) {
        const order = this.orders.find((o) => o.id === orderId);
        if (order) order.status = status;
        return order;
    }

    confirmOrder(orderId: string): Order {
        const order = this.orders.find((o) => o.id === orderId);
        if (!order) throw new Error('Pedido no encontrado');

        order.status = 'confirmed';

        this.eventEmitter.emit('order.confirmed', order);

        return order;
    }


    completeOrder(orderId: string, code: string) {
        const order = this.orders.find((o) => o.id === orderId);
        if (!order) throw new Error('Pedido no encontrado');
        if (order.status !== 'picked_up') throw new Error('Pedido no está en tránsito');

        if (order.confirmationCode !== code) {
            throw new Error('Código de confirmación inválido');
        }

        order.status = 'delivered';
        this.eventEmitter.emit('order.delivered', order);
        return order;
    }

    pickUpOrder(orderId: string): Order {
        const order = this.orders.find((o) => o.id === orderId);
        if (!order) throw new Error('Pedido no encontrado');
        if (order.status !== 'assigned') throw new Error('Pedido no asignado');

        order.status = 'picked_up';
        this.eventEmitter.emit('order.picked_up', order);
        return order;
    }

    assignRider(orderId: string, riderId: string): Order {
        const order = this.orders.find((o) => o.id === orderId);
        if (!order) throw new Error('Pedido no encontrado');

        order.riderId = riderId;
        order.status = 'assigned';

        order.confirmationCode = Math.floor(1000 + Math.random() * 9000).toString();

        this.eventEmitter.emit('order.assigned', order);
        return order;
    }
}
