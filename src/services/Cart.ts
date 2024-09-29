import { Storable } from "../interfaces/Storable";
import { Product } from "../interfaces/Product";

// Classe Cart : Représente le panier d'achat, utilisant un stockage abstrait.
export class Cart {
  constructor(private storage: Storable) {}

  // Ajoute un produit au panier en utilisant la méthode add() du stockage
  addProduct(product: Product): void {
    this.storage.add(product);
  }

  // Retourne tous les produits actuellement dans le panier
  getProducts(): Product[] {
    return this.storage.getAll();
  }

  // Calcule et retourne le prix total de tous les produits dans le panier
  getTotalPrice(): number {
    return this.storage
      .getAll()
      .reduce((total, product) => total + product.getPrice(), 0);
  }
}
