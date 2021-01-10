import { Router } from "express";
import { getProductsController } from "./../useCases/product/getProducts";

const ProductRouter = Router();


ProductRouter.post("/getAccounts", (request, response) => {
  return getProductsController.handle(request, response);
});

export { ProductRouter };
