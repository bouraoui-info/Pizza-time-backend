// user.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Nom: string;

  @Column({ select: false })
  password: string;

  @Column({ default: false })
  seller: boolean;

  @Column('jsonb', { nullable: true })
  address: {
    addr1: string;
    addr2: string;
    city: string;
    state: string;
    country: string;
    zip: number;
  };

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
