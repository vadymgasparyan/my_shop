import {Request, Response} from "express";
import OrderModel from "../mongoModels/Order";

export default async function(req: Request, res: Response): Promise<void> {
    const {_id} = req.body;
    await OrderModel.updateOne({_id}, {$set:{isCanceled: true}});
    const order = await OrderModel.findOne({_id}, {});
    res.status(200).json(order);
};