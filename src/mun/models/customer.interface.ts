import { Document } from 'mongoose';

export interface Customer extends Document {
  name: string;
  lastName: string;
  dateOfBirth: Date;
  email: string;
  phoneNumber: string;
}
