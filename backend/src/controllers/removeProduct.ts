import {Request, Response} from "express";
import ProductModel from "../mongoModels/Product";

export default async function(req: Request, res: Response): Promise<void> {
    const {_id} = req.body;
    await ProductModel.deleteOne({_id}).exec();
    res.sendStatus(200);
};