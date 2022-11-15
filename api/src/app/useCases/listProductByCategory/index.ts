import { ListProductByCategoryController } from "./ListProductByCategoryController";
import { ListProductByCategoryUseCase } from "./ListProductByCategoryUseCase";


const listProductByCategoryUseCase = new ListProductByCategoryUseCase();
const listProductByCategoryController = new ListProductByCategoryController(listProductByCategoryUseCase);


export default listProductByCategoryController;
