import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CustomerController } from './controllers/customer/customer.controller';
import { customerSchema } from './schemas/customer.schema';
import { CustomerService } from './services/customer/customer.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Customer', schema: customerSchema }]),
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class MunModule {}
