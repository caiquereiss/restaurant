import { Category } from "../../models/Category";


interface IRequest {
  name: string;
  icon: string;
}

export class CreateCategoryUseCase {
  async execute({ name, icon }: IRequest) {
    await Category.create({ icon, name });
  }
}
