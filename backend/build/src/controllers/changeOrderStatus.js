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
const Order_1 = __importDefault(require("../mongoModels/Order"));
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { _id } = req.body;
        let order = yield Order_1.default.findOne({ _id }).exec();
        const isProcessing = !order.isProcessing && true;
        const isFinished = order.isProcessing && !order.isFinished && true;
        yield Order_1.default.updateOne({ _id }, { $set: { isProcessing, isFinished } });
        order = yield Order_1.default.findOne({ _id }, {});
        res.status(200).json(order);
    });
}
exports.default = default_1;
;
