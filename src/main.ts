import { Product } from "./interfaces/Product";
import { InMemoryStorage } from "./services/InMemoryStorage";
import { Cart } from "./services/Cart";

const crayon = new Product("Crayon", 6);
const stylo = new Product("Stylo", 3);

const storage = new InMemoryStorage();

const cart = new Cart(storage);

cart.addProduct(crayon);
cart.addProduct(stylo);

console.log("My Cart:", cart.getProducts());
console.log("Total Price:", cart.getTotalPrice());
