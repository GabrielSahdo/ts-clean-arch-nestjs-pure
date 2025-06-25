import { DataSource } from '../../../common/dataSource.interface';
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
  ): Promise<ProductDto> {
    const gateway = new ProductGateway(this.dataSource);
    const useCase = new CreateProductUseCase(gateway);

    const product = await useCase.execute(productInput);

    return ProductPresenter.toDto(product);
  }

  async getProduct(productId: string): Promise<ProductDto> {
    const gateway = new ProductGateway(this.dataSource);
    const useCase = new GetProductByIdUseCase(gateway);

    const product = await useCase.execute(productId);

    return ProductPresenter.toDto(product);
  }
}
