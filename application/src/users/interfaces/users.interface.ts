import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly last_name: string;
  readonly email: string;
  readonly phone_number: string;
  readonly birth_date: string;
  readonly password: string;
  readonly admin: string;
}