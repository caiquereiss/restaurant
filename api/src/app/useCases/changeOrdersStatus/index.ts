import { ChangeOrderStatusController } from "./ChangeOrderStatusController";
import { ChangeOrderStatusUseCase } from "./ChangeOrderStatusUseCase";



const changeOrderStatusUseCase = new ChangeOrderStatusUseCase();
const changeOrderStatusController = new ChangeOrderStatusController(changeOrderStatusUseCase);

export default changeOrderStatusController;
