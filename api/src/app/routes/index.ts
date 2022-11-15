import { Router } from "express";
import categoryRoutes from "./category.routes";
import orderRoutes from "./order.routes";
import productsRoutes from "./product.routes";


const router = Router();


router.use("/products", productsRoutes);
router.use("/orders", orderRoutes);
router.use("/categories", categoryRoutes);


export default router;
