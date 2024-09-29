"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
// Classe Cart : Représente le panier d'achat, utilisant un stockage abstrait.
class Cart {
    constructor(storage) {
        this.storage = storage;
    }
    // Ajoute un produit au panier en utilisant la méthode add() du stockage
    addProduct(product) {
        this.storage.add(product);
    }
    // Retourne tous les produits actuellement dans le panier
    getProducts() {
        return this.storage.getAll();
    }
    // Calcule et retourne le prix total de tous les produits dans le panier
    getTotalPrice() {
        return this.storage
            .getAll()
            .reduce((total, product) => total + product.getPrice(), 0);
    }
}
exports.Cart = Cart;
