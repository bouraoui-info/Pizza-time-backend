export interface Address {
    addr1: string;
    addr2: string;
    city: string;
    state: string;
    country: string;
    zip: number;
  }
  
  export interface User {
    id: number; // Ajoutez une propriété pour l'identifiant, car dans PostgreSQL, l'identifiant peut être numérique
    username: string;
    password: string; // Vous pouvez laisser password comme une propriété modifiable
    seller: boolean;
    address: Address;
    created: Date;
  }
  