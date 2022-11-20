import { Request, Response } from "express";
import { ListProductByCategoryUseCase } from "./ListProductByCategoryUseCase";


export class ListProductByCategoryController {
  constructor(private listProductByCategoryUseCase: ListProductByCategoryUseCase) { }
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { category_id } = request.params;
      const products = await this.listProductByCategoryUseCase.execute(category_id);

      return response.json(products);
    } catch (error) {
      console.log(error);
      return response.status(500);
    }
  }
}
