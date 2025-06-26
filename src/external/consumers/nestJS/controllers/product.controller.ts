import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { DataSource } from 'src/common/dataSources/dataSource.interface';
import { ResourceNotFoundException } from 'src/common/exceptions/resourceNotFoundException';
import { ProductController } from 'src/core/products/controllers/product.controller';
import { DataSourceProxy } from 'src/external/dataSources/dataSourceProxy';
import { InMemoryGeneralDataSource } from 'src/external/dataSources/general/inMemoryGeneralDataSource';
import { FakePaymentDataSource } from 'src/external/dataSources/payment/fakePaymentDataSource';

@Controller('product')
export class ProductHttpController {
  dataSource: DataSource;
  productCoreController: ProductController;

  constructor() {
    this.dataSource = new DataSourceProxy(
      new InMemoryGeneralDataSource(),
      new FakePaymentDataSource(),
    );

    this.productCoreController = new ProductController(this.dataSource);
  }

  @Get(':id')
  async getProduct(@Param('id') id: string) {
    const [err, res] = await this.productCoreController.getProduct(id);
    if (err) {
      if (err.code === ResourceNotFoundException.CODE) {
        throw new NotFoundException(err.message);
      }
      console.error('Error getting product:', err);
      throw new InternalServerErrorException();
    }

    return res;
  }

  @Post()
  async createProduct(@Body() productInput: CreateProductInput) {
    const [err, res] = await this.productCoreController.createProduct({
      name: productInput.name,
      price: productInput.price,
      quantity: productInput.quantity,
    });

    if (err) {
      throw new InternalServerErrorException();
    }

    return res;
  }
}

interface CreateProductInput {
  name: string;
  price: number;
  quantity: number;
}
