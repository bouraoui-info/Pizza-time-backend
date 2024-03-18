import {Product} from '../types/products';
export interface Address {
    addr1: string;
    addr2: string;
    city: string;
    state: string;
    country: string;
    zip: number;
  }
  
  export interface User {
    id: string; // Ajoutez une propriété pour l'identifiant, car dans PostgreSQL, l'identifiant peut être numérique
    username: string;
    password: string; // Vous pouvez laisser password comme une propriété modifiable
    seller: boolean;
    address: Address;
    created: Date;
    email: string;
    phone:number; 
    products: Product[];
  }
  