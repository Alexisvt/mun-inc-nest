import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateCustomerDto } from '../../dto/create-customer-dto';
import { Customer } from '../../models/customer.interface';
import { CustomerService } from '../../services/customer/customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly service: CustomerService) {}

  @Post()
  create(@Body() dto: CreateCustomerDto): Promise<Customer> {
    return this.service.create(dto);
  }

  @Get()
  findAll(): Promise<Customer[]> {
    return this.service.findAll();
  }
}
