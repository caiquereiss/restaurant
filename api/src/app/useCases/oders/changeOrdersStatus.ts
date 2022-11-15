import { Request, Response } from 'express';

import { Order } from '../../models/Order';


export async function ChangeOdersStatus(req: Request, res: Response) {

  try {
    const { order_id } = req.params;
    const { status } = req.body;

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      return res.status(400).json({
        error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE '
      });
    }
    await Order.findByIdAndUpdate(order_id, { status });

    res.sendStatus(204);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
