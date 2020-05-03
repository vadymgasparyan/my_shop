import {Request, Response} from 'express';
import fs from 'fs';
import multer, {FileFilterCallback} from 'multer';

import ProductModel from './../mongoModels/Product';

const memoryStorage = multer.diskStorage({
    destination: 'src/files',
    filename(req, file: Express.Multer.File, callback: (error: (Error | null), filename: string) => void): void {
        callback(null, file.originalname);
    }
});

const multerUpload = multer({
    storage: memoryStorage,
}).single('file');

function parseMultipartFormData(req: Request, res: Response): Promise<void> {
    return new Promise(function (resolve, reject) {
        multerUpload(req, res, function (err?: Error) {
            if (err) {
                reject(err);

                return;
            }
            resolve();
        });
    });
}

export default async function(req: Request, res: Response): Promise<void> {
    await parseMultipartFormData(req, res);

    const product = await ProductModel.create({
        product: req.body.product,
        weight: req.body.weight,
        price: req.body.price,
        attachment: `/api/files/${req.file.originalname}`
    });

    res.status(200).json(product);
};