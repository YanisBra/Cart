// Classe Product : Représente un produit avec un nom et un prix privés.
export class Product {
  constructor(private name: string, private price: number) {}

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}
