import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Order } from './entities/order.entity';
import { v4 as uuid } from 'uuid';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CreateOrderDto } from './dto/create-order.dto';
import { CustomersService } from 'src/customers/customers.service';
import { SellersService } from 'src/sellers/sellers.service';
import { Rider } from 'src/riders/entities/rider.entity';

@Injectable()
export class OrdersService {
    constructor(
        private eventEmitter: EventEmitter2,
        private readonly customersService: CustomersService,
        private readonly sellersService: SellersService

    ) { }
    private orders: Order[] = [];

    create(newOrder: CreateOrderDto): Order {
        const customer = this.customersService.findById(newOrder.customerId);
        if (!customer) {
            throw new NotFoundException('Cliente no encontrado');
        }
        const seller = this.sellersService.findById(newOrder.sellerId);
        if (!seller) {
            throw new NotFoundException('Vendedor no encontrado');
        }

        const order: Order = {
            id: uuid(),
            customerId: newOrder.customerId,
            sellerId: newOrder.sellerId,
            status: 'created',
            createdAt: new Date(),
        };
        this.orders.push(order);

        this.eventEmitter.emit('order.created', { order, customer, seller });

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
        if (!order) throw new NotFoundException('Pedido no encontrado');

        order.status = 'confirmed';

        const customer = this.customersService.findById(order.customerId);
        this.eventEmitter.emit('order.confirmed', {order,customer});

        return order;
    }


    completeOrder(orderId: string, code: string) {
        const order = this.orders.find((o) => o.id === orderId);
        if (!order) throw new NotFoundException('Pedido no encontrado');
        if (order.status !== 'picked_up') throw new BadRequestException('Pedido no está en tránsito');

        if (order.confirmationCode !== code) {
            throw new BadRequestException('Código de confirmación inválido');
        }

        const customer = this.customersService.findById(order.customerId);
        order.status = 'delivered';
        this.eventEmitter.emit('order.delivered', { order, customer });
        return order;
    }

    pickUpOrder(orderId: string): Order {
        const order = this.orders.find((o) => o.id === orderId);
        if (!order) throw new NotFoundException('Pedido no encontrado');
        if (order.status !== 'assigned') throw new BadRequestException('Pedido no asignado');

        const customer = this.customersService.findById(order.customerId);
        order.status = 'picked_up';
        this.eventEmitter.emit('order.picked_up', { order, customer });
        return order;
    }

    assignRider(orderId: string, rider: Rider): Order {
        const order = this.orders.find((o) => o.id === orderId);
        if (!order) throw new NotFoundException('Pedido no encontrado');

        order.riderId = rider.id;
        order.status = 'assigned';

        order.confirmationCode = Math.floor(1000 + Math.random() * 9000).toString();

        const customer = this.customersService.findById(order.customerId);
        const seller = this.sellersService.findById(order.sellerId);
        this.eventEmitter.emit('order.assigned', { order, customer, seller, rider });
        return order;
    }
}
