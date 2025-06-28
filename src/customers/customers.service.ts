import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [];

  create(createCustomerDto: CreateCustomerDto): Customer {
    const newCustomer: Customer = {
      id: uuid(),
      ...createCustomerDto,
    };

    this.customers.push(newCustomer);
    return newCustomer;
  }


  findById(id:string): Customer | undefined {
    return this.customers.find(customer => customer.id === id);
  }

  findAll(): Customer[] {
    return this.customers;
  }
}
