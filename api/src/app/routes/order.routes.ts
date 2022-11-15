import { Router } from "express";
import cancelOrderController from "../useCases/cancelOrders";
import changeOrderStatusController from "../useCases/changeOrdersStatus";
import createOderController from "../useCases/createOders";
import listOrderController from "../useCases/listOrders";


const orderRoutes = Router();


orderRoutes.post("/", (request, response) => {
  createOderController.handle(request, response);
});

orderRoutes.get("/", (request, response) => {
  listOrderController.handle(request, response);
});

orderRoutes.delete("/:order_id", (request, response) => {
  cancelOrderController.handle(request, response);
});

orderRoutes.patch("/:order_id", (request, response) => {
  changeOrderStatusController.handle(request, response);
});



export default orderRoutes;
