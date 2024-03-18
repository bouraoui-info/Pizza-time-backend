import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;
    @Column()
    email: string;
    @Column()
    password: string;
    
    products: any;
    orders: any;
}
