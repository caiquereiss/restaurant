import { CancelOderController } from "./CancelOderController";
import { CancelOderUseCase } from "./CancelOderUseCase";



const cancelOrderUseCase = new CancelOderUseCase();
const cancelOrderController = new CancelOderController(cancelOrderUseCase);


export default cancelOrderController;
