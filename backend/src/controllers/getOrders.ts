import {Request, Response} from 'express';

import OrderModel from './../mongoModels/Order';

export default async function(req: Request, res: Response): Promise<void> {
    const products = await OrderModel.find({}, {}).exec();

    console.log(products);

    res.status(200).json(products);
};