import { Product } from "./Product";

// Interface Storable : Déclare les méthodes pour ajouter et récupérer des produits.
export interface Storable {
  add(product: Product): void;
  getAll(): Product[];
}
