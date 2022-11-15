import { Order } from "../../models/Order";


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
    return order;
  }
}
