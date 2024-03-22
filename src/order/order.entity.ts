import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from'src/users/user.entity';
import { Product } from 'src/product/product.entity';

@Entity()   
export class Order{
@PrimaryGeneratedColumn()
id: string;
@Column()
totalAmount : number;

// @ManyToOne(() => User, (user) => user.orders)
user: User;
// @ManyToOne(()=> User, (user) => user.products)
    product: Product; 
}

