import { Product } from "../product/product.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    email: string;
    @Column()
    name: string;
    @Column()
    lastname: string;
    @Column()
    phone: string;
    @Column()
    address: string;
    @Column()
    image: string;
    @Column()
    password: string;
    @OneToMany(() => Product, (product) => product.owner)
    products: Product[];
}
