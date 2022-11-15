import { Product } from "../../models/Product";


export class ListProductUseCase {
  async execute() {
    const products = await Product.find();
    return products;

  }
}
