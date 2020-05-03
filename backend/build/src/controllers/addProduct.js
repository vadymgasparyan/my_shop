"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const Product_1 = __importDefault(require("./../mongoModels/Product"));
const memoryStorage = multer_1.default.diskStorage({
    destination: 'src/files',
    filename(req, file, callback) {
        callback(null, file.originalname);
    }
});
const multerUpload = multer_1.default({
    storage: memoryStorage,
}).single('file');
function parseMultipartFormData(req, res) {
    return new Promise(function (resolve, reject) {
        multerUpload(req, res, function (err) {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield parseMultipartFormData(req, res);
        const product = yield Product_1.default.create({
            product: req.body.product,
            weight: req.body.weight,
            price: req.body.price,
            attachment: `/api/files/${req.file.originalname}`
        });
        res.status(200).json(product);
    });
}
exports.default = default_1;
;
