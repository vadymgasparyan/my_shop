import {Request, Response} from "express";
import ProductModel from "../mongoModels/Product";

export default async function(req: Request, res: Response): Promise<void> {
    const products = await ProductModel.find({}, {}).exec();

    res.status(200).json(products);
};