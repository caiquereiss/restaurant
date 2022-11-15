import { Request, Response } from 'express';

import { Order } from '../../models/Order';


export async function cancelOder(req: Request, res: Response) {

  try {
    const { order_id } = req.params;
    await Order.findByIdAndDelete(order_id);

    res.sendStatus(204);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
