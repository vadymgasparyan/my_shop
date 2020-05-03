import {Request, Response} from 'express';

import OrderModel from './../mongoModels/Order';

export default async function(req: Request, res: Response): Promise<void> {
    const order = req.body;
    await OrderModel.create({
        ...order
    });

    res.sendStatus(200);
};