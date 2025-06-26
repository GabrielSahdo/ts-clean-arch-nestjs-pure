import { CoreResponse } from 'src/common/DTOs/coreResponse';
import { DataSource } from '../../../common/dataSources/dataSource.interface';
import { CreateProductInputDto } from '../DTOs/createProductInput.dto';
import { ProductDto } from '../DTOs/product.dto';
import { ProductGateway } from '../gateways/product.gateway';
import { ProductPresenter } from '../presenters/product.presenters';
import { CreateProductUseCase } from '../useCases/createProduct.useCase';
import { GetProductByIdUseCase } from '../useCases/getProductById.useCase';

export class ProductController {
  constructor(private dataSource: DataSource) {}

  async createProduct(
    productInput: CreateProductInputDto,
  ): Promise<CoreResponse<ProductDto>> {
    const gateway = new ProductGateway(this.dataSource);
    const useCase = new CreateProductUseCase(gateway);

    const [err, product] = await useCase.execute(productInput);

    if (err) {
      return [err, undefined];
    }

    return [undefined, ProductPresenter.toDto(product)];
  }

  async getProduct(productId: string): Promise<CoreResponse<ProductDto>> {
    const gateway = new ProductGateway(this.dataSource);
    const useCase = new GetProductByIdUseCase(gateway);

    const [err, product] = await useCase.execute(productId);

    if (err) {
      return [err, undefined];
    }

    return [undefined, ProductPresenter.toDto(product)];
  }
}
