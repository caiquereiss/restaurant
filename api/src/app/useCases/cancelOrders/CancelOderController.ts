import { Request, Response } from "express";
import { CancelOderUseCase } from "./CancelOderUseCase";


export class CancelOderController {
  constructor(private cancelOrderUseCase: CancelOderUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { order_id } = request.params;

      await this.cancelOrderUseCase.execute(order_id);

      return response.sendStatus(204);

    } catch (error) {
      console.log(error);
      return response.sendStatus(500);
    }
  }
}
