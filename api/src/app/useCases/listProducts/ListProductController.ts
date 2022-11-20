import { Request, Response } from "express";
import { ListProductUseCase } from "./ListProductUseCase";



export class ListProductController {
  constructor(private listProductsUseCase: ListProductUseCase) { }
  async handle(request: Request, response: Response): Promise<Response> {

    try {
      const allProducts = await this.listProductsUseCase.execute();
      return response.status(200).json(allProducts);

    } catch (error) {

      console.log(error);
      return response.status(500);
    }

  }
}
