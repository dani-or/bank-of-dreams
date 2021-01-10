import { GetProductsController } from "./getProducts.controller";
import { GetProductsService } from "./getProducts.service";
import { MockProductRespository } from "../../../repositories/implementations/MockProductRespository";
const mockProductRespository = new MockProductRespository();
const getProductsService = new GetProductsService(mockProductRespository);
const getProductsController = new GetProductsController(getProductsService);
export { getProductsService, getProductsController};