import { Router } from "express";
import createCategoryController from "../useCases/createCategories";
import listCategoryController from "../useCases/listCategories";
import listProductByCategoryController from "../useCases/listProductByCategory";



const categoryRoutes = Router();


categoryRoutes.post("/", (request, response) => {
  createCategoryController.handle(request, response);
});

categoryRoutes.get("/", (request, response) => {
  listCategoryController.handle(request, response);
});
categoryRoutes.get("/:category_id/products", (request, response) => {
  listProductByCategoryController.handle(request, response);
});



export default categoryRoutes;
