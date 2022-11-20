import { Order } from "../../models/Order";
import { io } from "../../../";

interface IRequest {
  table: string;
  products: [{
    product: string
    quantity: number,
    _id: string
  }]

}

export class CreateOderUseCase {
  async execute({
    table,
    products
  }: IRequest) {
    const order = await Order.create({
      table,
      products
    });
    const orderDetails = await order.populate("products.product");
    io.emit("orders@new", orderDetails);
    return order;

  }

}
