import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DataSource } from 'src/common/dataSource.interface';
import { ProductController } from 'src/core/products/controllers/product.controller';
import { InMemoryDataSource } from 'src/external/dataSources/inMemoryDataSource';

@Controller('product')
export class AppController {
  dataSource: DataSource;
  productCoreController: ProductController;

  constructor() {
    this.dataSource = new InMemoryDataSource();
    this.productCoreController = new ProductController(this.dataSource);
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productCoreController.getProduct(id);
  }

  @Post()
  createProduct(@Body() productInput: CreateProductInput) {
    return this.productCoreController.createProduct({
      name: productInput.name,
      price: productInput.price,
      quantity: productInput.quantity,
    });
  }
}

interface CreateProductInput {
  name: string;
  price: number;
  quantity: number;
}
