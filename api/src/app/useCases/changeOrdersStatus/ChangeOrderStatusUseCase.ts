import { Order } from "../../models/Order";


export class ChangeOrderStatusUseCase {
  async execute(order_id: string, status: string) {

    if (!["WAITING", "IN_PRODUCTION", "DONE"].includes(status)) {
      throw new Error(
        "Status should be one of these: WAITING, IN_PRODUCTION, DONE "
      );
    }
    await Order.findByIdAndUpdate(order_id, { status });
  }
}
