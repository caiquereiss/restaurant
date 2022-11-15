import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";



const listCategoryUseCase = new ListCategoryUseCase();
const listCategoryController = new ListCategoryController(listCategoryUseCase);

export default listCategoryController;
