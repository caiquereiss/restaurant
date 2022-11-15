import { Request, Response } from 'express';

import { Product } from '../../models/Product';


export async function listProductsByCategory(req: Request, res: Response) {

  try {
    const { category_id } = req.params;
    const products = await Product.find().where('category').equals(category_id);

    res.json(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
