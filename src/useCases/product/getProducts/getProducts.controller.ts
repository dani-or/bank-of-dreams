import { Request, Response } from "express";

import { GetProductsService } from "./getProducts.service";

export class GetProductsController {
  constructor(private getProducts: GetProductsService) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.body;
    try {
      let p = await this.getProducts.execute({
        userId
      });
      return response.status(201).json({p});
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
