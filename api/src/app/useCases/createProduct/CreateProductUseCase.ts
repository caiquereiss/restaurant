import { Product } from "../../models/Product";

interface IRequest {
  name: string;
  description: string
  imagePath?: string;
  price: number,
  category: string;
  ingredients: [{
    name: string;
    icon: string;
    id: string
  }]
}
export class CreateProductUseCase {
  async execute({
    name,
    description,
    imagePath,
    price,
    category,
    ingredients
  }: IRequest) {

    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients
    });
    return product;
  }
}
