import { CreateOderUseCase } from "./CreateOderUseCase";
import { CreateOderController } from "./CreateOderController";



const createOderUseCase = new CreateOderUseCase();
const createOderController = new CreateOderController(createOderUseCase);


export default createOderController;
