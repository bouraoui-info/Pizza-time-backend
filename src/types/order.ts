import { User } from '../types/user';

import {Product} from '../types/products';

interface ProductOrder{
produit: Product;
quantite: number;
}
export interface Order{
owner: User;
totalPrice: number;
products: ProductOrder[];
created: Date;
}