import { Router } from "express";
import createProductController from "../useCases/createProduct";
import listProductController from "../useCases/listProducts";
import multer from "multer";
import path from "node:path";


const productsRoutes = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "../../../", "uploads"));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});


productsRoutes.post("/", upload.single("image"), (request, response) => {
  createProductController.handle(request, response);
});

productsRoutes.get("/", (request, response) => {
  listProductController.handle(request, response);
});

export default productsRoutes;
