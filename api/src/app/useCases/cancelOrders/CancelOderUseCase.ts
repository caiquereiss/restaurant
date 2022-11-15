import { Order } from "../../models/Order";



export class CancelOderUseCase {
  async execute(order_id: string): Promise<void> {
    await Order.findByIdAndDelete(order_id);
  }
}
