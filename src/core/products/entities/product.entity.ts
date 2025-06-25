import { generateUUID } from '../../utils/generateUUID.utils';

export class Product {
  id: string;
  name: string;
  price: number;
  quantity: number;

  private constructor(
    id: string,
    name: string,
    price: number,
    quantity: number,
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  static create(name: string, price: number, quantity: number): Product {
    return new Product(generateUUID(), name, price, quantity);
  }

  static restore(
    id: string,
    name: string,
    price: number,
    quantity: number,
  ): Product {
    return new Product(id, name, price, quantity);
  }
}
