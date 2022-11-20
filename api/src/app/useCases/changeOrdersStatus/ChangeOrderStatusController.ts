import { Request, Response } from "express";
import { ChangeOrderStatusUseCase } from "./ChangeOrderStatusUseCase";


export class ChangeOrderStatusController {
  constructor(private changeOrderStatusUseCase: ChangeOrderStatusUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { order_id } = request.params;
      const { status } = request.body;

      await this.changeOrderStatusUseCase.execute(order_id, status);

      return response.status(204);

    } catch (error) {
      console.log(error);
      return response.status(500);
    }
  }

}
