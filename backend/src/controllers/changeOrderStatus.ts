import {Request, Response} from "express";
import OrderModel from "../mongoModels/Order";

export default async function(req: Request, res: Response): Promise<void> {
    const {_id} = req.body;
    let order = await OrderModel.findOne({_id}).exec();
    const isProcessing = !order.isProcessing && true;
    const isFinished = order.isProcessing && !order.isFinished && true;
    await OrderModel.updateOne({_id}, {$set:{isProcessing, isFinished}});
    order = await OrderModel.findOne({_id}, {});
    res.status(200).json(order);
};