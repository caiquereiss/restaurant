import { Product } from "../../models/Product";



export class ListProductByCategoryUseCase {
  async execute(category_id: string) {
    const products = await Product.find().where("category").equals(category_id);
    return products;
  }
}
