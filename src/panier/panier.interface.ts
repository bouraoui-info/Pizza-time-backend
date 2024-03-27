import { User } from "../users/user.entity";

export interface panier{
    id?:string;
    cartItem?:CartItem[];
    etat?:string;
    prix?:number;
    time?:Date;
    userId:User; 
}

export interface CartItem {
    checkedItems: { [itemName: string]: boolean };
    data: any;
    quantity: number;
    sup: any; // You may need to specify the type of this property if it has a specific structure
}