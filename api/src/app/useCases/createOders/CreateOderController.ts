import { Request, Response } from "express";
import { CreateOderUseCase } from "./CreateOderUseCase";




export class CreateOderController {
  constructor(private createOderUseCase: CreateOderUseCase) { }
  async handle(request: Request, response: Response): Promise<Response> {
    try {

      const { table, products } = request.body;

      const order = await this.createOderUseCase.execute({
        table,
        products
      });
      return response.status(201).json(order);


    } catch (error) {
      console.log(error);
      return response.status(500);
    }
  }
}
