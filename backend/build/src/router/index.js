"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const controllers_1 = __importDefault(require("../controllers"));
const passportMiddleware_1 = __importDefault(require("../../src/middleware/passportMiddleware"));
const router = express_1.Router();
const authenticate = passport_1.default.authenticate('local', { session: true });
router.post('/api/add-order', controllers_1.default.addOrder);
router.post('/api/add-product', controllers_1.default.addProduct);
router.get('/api/get-product', controllers_1.default.getProduct);
router.get('/api/get-orders', controllers_1.default.getOrders);
router.post('/api/remove-product', controllers_1.default.removeProduct);
router.post('/api/login', authenticate, controllers_1.default.login);
router.get('/api/me', passportMiddleware_1.default.authenticationMiddleware, (req, res) => res.sendStatus(200));
router.post('/api/cancel-order', controllers_1.default.cancelOrder);
router.post('/api/change-order-status', controllers_1.default.changeOrderStatus);
exports.default = router;