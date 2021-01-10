import { Product } from "../entities/Product";

export interface IProductRepository {
  openProduct(product: Product ): Promise<void>;
  getProducts(id:string) : Promise<Array<Product>>;
}
