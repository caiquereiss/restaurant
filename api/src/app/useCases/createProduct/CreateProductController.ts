import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {

  }
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const imagePath = request.file?.filename;
      const { name, description, price, category, ingredients } = request.body;

      const product = await this.createProductUseCase.execute({
        name,
        description,
        imagePath,
        price: Number(price),
        category,
        ingredients: ingredients ? JSON.parse(ingredients) : []
      });
      return response.status(201).json(product);

    } catch (error) {
      return response.status(500);
    }
  }
}
