import { Schema } from 'mongoose';

import { Customer } from '../models/customer.interface';

export const customerSchema = new Schema<Customer>({
  name: String,
  lastName: String,
  dateOfBirth: Date,
  email: String,
  phoneNumber: String,
});
