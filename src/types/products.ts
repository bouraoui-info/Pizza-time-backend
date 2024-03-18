import { User } from './user'; // Assurez-vous d'importer correctement votre interface User

export interface Product {
  id: string; // Ajoutez une propriété pour l'identifiant, car dans PostgreSQL, l'identifiant peut être numérique
  owner: User;
  title: string;
  image: string;
  description: string;
  price: number;
  created: Date;
}
