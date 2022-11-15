import { Category } from "../../models/Category";


export class ListCategoryUseCase {
  async execute() {
    const categories = await Category.find();

    return categories;
  }
}
