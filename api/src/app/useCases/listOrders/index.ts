import { ListOrderController } from "./ListOrderController";
import { ListOrderUseCase } from "./ListOrderUseCase";



const listOrderUseCase = new ListOrderUseCase();
const listOrderController = new ListOrderController(listOrderUseCase);


export default listOrderController;
