import { Controller, Post, Body, Get, Patch, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) { }

    @Post()
    create(@Body() body: CreateOrderDto) {
        return this.ordersService.create(body);
    }

    @Get()
    findAll() {
        return this.ordersService.findAll();
    }

    @Patch(':id/status')
    updateStatus(@Param('id') id: string, @Body() body: { status: string }) {
        return this.ordersService.updateStatus(id, body.status as any);
    }

    @Patch(':id/confirm')
    confirmOrder(@Param('id') id: string) {
        return this.ordersService.confirmOrder(id);
    }

    @Patch(':id/complete')
    completeOrder(@Param('id') id: string, @Body() body: { code: string }) {
        return this.ordersService.completeOrder(id, body.code);
    }

    @Patch(':id/pick-up')
    pickUpOrder(@Param('id') id: string) {
        return this.ordersService.pickUpOrder(id);
    }
}
