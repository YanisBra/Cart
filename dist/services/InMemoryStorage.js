"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryStorage = void 0;
// Classe InMemoryStorage : Gère le stockage des produits en mémoire.
class InMemoryStorage {
    constructor() {
        this.products = [];
    }
    add(product) {
        this.products.push(product);
    }
    getAll() {
        return this.products;
    }
}
exports.InMemoryStorage = InMemoryStorage;
