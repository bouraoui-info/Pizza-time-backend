// order.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.schema';

@Entity()
export class Order {
  
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  customerName: string;

  @Column("text", { array: true })
  products: string[];

  @Column()
  totalPrice: number;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  orderDate: Date;
  @Column()
  owner: User
}
