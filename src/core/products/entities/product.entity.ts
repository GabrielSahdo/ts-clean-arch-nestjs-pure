import { CoreResponse } from 'src/common/DTOs/coreResponse';
import { generateUUID } from '../../utils/generateUUID.utils';
import { ResourceInvalidException } from 'src/common/exceptions/resourceInvalidException';

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

    this.validate();
  }

  validate() {
    if (this.name.length > 255) {
      throw new ResourceInvalidException('Product name too long');
    }
  }

  static create(
    name: string,
    price: number,
    quantity: number,
  ): CoreResponse<Product> {
    try {
      const product = new Product(generateUUID(), name, price, quantity);
      return [undefined, product];
    } catch (error) {
      return [error, undefined];
    }
  }

  static restore(
    id: string,
    name: string,
    price: number,
    quantity: number,
  ): CoreResponse<Product> {
    try {
      const product = new Product(id, name, price, quantity);
      return [undefined, product];
    } catch (error) {
      return [error, undefined];
    }
  }
}
