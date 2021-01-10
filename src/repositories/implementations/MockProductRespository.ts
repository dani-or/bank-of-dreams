import { IProductRepository } from "../IProductRepository";
// Pure simulation here
import { Product } from "../../entities/Product";
export class MockProductRespository implements IProductRepository {

  async openProduct(product: Product ){
    console.log("algoooo");
  }
  async getProducts(id:string) {
    let products :Array<Product>  = [];
    let p1 = new Product({
        openDateTimeStamp: 123,
        status : 1,
        balance : 333333,
        nature : 1
    });
    products.push(p1);
    return products;
  }
}
