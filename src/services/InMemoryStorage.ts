import { Storable } from "../interfaces/Storable";
import { Product } from "../interfaces/Product";

// Classe InMemoryStorage : Gère le stockage des produits en mémoire.
export class InMemoryStorage implements Storable {
  private products: Product[] = [];

  add(product: Product): void {
    this.products.push(product);
  }

  getAll(): Product[] {
    return this.products;
  }
}
