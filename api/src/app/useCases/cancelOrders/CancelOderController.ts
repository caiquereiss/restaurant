import { Request, Response } from "express";
import { CancelOderUseCase } from "./CancelOderUseCase";


export class CancelOderController {
  constructor(private cancelOrderUseCase: CancelOderUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { order_id } = request.params;
      console.log("order_id", order_id);
      await this.cancelOrderUseCase.execute(order_id);

      return response.status(204);

    } catch (error) {
      console.log(error);
      return response.status(500);
    }
  }
}
