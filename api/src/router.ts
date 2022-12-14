import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProducts } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProducts';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOders } from './app/useCases/oders/listOders';
import { createOrder } from './app/useCases/oders/createOder';
import { ChangeOdersStatus } from './app/useCases/oders/changeOrdersStatus';
import { cancelOder } from './app/useCases/oders/cancelOder';


export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

// List categories
router.get('/categories', listCategories);


// Create category
router.post('/categories', createCategory);


// List products
router.get('/products', listProducts);

// Create product

router.post('/products', upload.single('image'), createProducts);

// Get products by category

router.get('/categories/:category_id/products', listProductsByCategory);

// List orders
router.get('/orders', listOders);

// Create order

router.post('/orders', createOrder);

// Change order status

router.patch('/orders/:order_id', ChangeOdersStatus);

// Delete/cancel order

router.delete('/orders/:order_id', cancelOder);
