"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
// Classe Product : Représente un produit avec un nom et un prix privés.
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
}
exports.Product = Product;
