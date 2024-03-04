// order.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerName: string;

  @Column("text", { array: true })
  products: string[];

  @Column()
  totalPrice: number;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  orderDate: Date;
}
