import { Request, Response } from "express";
import { ListOrderUseCase } from "./ListOrderUseCase";



export class ListOrderController {
  constructor(private listOrderUseCase: ListOrderUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const AllOrders = await this.listOrderUseCase.execute();

      return response.json(AllOrders);
    } catch (error) {
      console.log(error);
      return response.sendStatus(500);
    }
  }
}
