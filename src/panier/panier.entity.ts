import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CartItem } from './panier.interface';
import { User } from "../users/user.entity";

@Entity('panier')
export class Panier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'jsonb' })
  panier: CartItem[];
  @Column({default:"non payé"})
  etat:string;
  @Column()
  prix: number;
  @Column()
  userId :string ;
  @Column()
  time: string;
}