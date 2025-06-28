import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  exports: [OrdersService],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
