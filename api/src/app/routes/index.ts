import { Router } from "express";
import orderRoutes from "./order.routes";
import productsRoutes from "./product.routes";


const router = Router();


router.use("/products", productsRoutes);
router.use("/orders", orderRoutes);


export default router;
