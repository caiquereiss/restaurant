import { ListProductController } from "./ListProductController";
import { ListProductUseCase } from "./ListProductUseCase";


const listProductUseCase = new ListProductUseCase();
const listProductController = new ListProductController(listProductUseCase);

export default listProductController;
