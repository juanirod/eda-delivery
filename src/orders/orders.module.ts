import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { CustomersModule } from 'src/customers/customers.module';
import { SellersModule } from 'src/sellers/sellers.module';

@Module({
  exports: [OrdersService],
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [CustomersModule, SellersModule]
})
export class OrdersModule {}
