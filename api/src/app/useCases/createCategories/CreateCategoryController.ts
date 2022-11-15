import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) { }
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { icon, name } = request.body;

      const category = await this.createCategoryUseCase.execute({ icon, name });

      return response.status(201).json(category);

    } catch (error) {
      console.log(error);
      return response.sendStatus(500);
    }
  }
}
