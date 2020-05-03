"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addOrder_1 = __importDefault(require("./addOrder"));
const addProduct_1 = __importDefault(require("./addProduct"));
const getProduct_1 = __importDefault(require("./getProduct"));
const getOrders_1 = __importDefault(require("./getOrders"));
const removeProduct_1 = __importDefault(require("./removeProduct"));
const login_1 = __importDefault(require("./login"));
const changeOrderStatus_1 = __importDefault(require("./changeOrderStatus"));
const cancellOrder_1 = __importDefault(require("./cancellOrder"));
exports.default = {
    addOrder: addOrder_1.default,
    addProduct: addProduct_1.default,
    getProduct: getProduct_1.default,
    removeProduct: removeProduct_1.default,
    getOrders: getOrders_1.default,
    login: login_1.default,
    changeOrderStatus: changeOrderStatus_1.default,
    cancelOrder: cancellOrder_1.default,
};
