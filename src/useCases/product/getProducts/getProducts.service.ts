import { IGetProductsRequestDTO } from "./getProducts.dto";
import { IProductRepository } from "../../../repositories/IProductRepository";
import { Product } from "../../../entities/Product";

export class GetProductsService {
  constructor(
    private productRepository: IProductRepository,
  ) {}

  async execute(data: IGetProductsRequestDTO) {
    let products :Array<Product> =await this.productRepository.getProducts(data.userId);
    return products;
  }
}
