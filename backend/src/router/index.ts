import {Router} from 'express';
import passport from 'passport';

import controllers from '../controllers';

import passportMiddleware from "../../src/middleware/passportMiddleware";

const router = Router();
const authenticate = passport.authenticate('local', {session: true});

router.post('/api/add-order', controllers.addOrder);
router.post('/api/add-product', controllers.addProduct);
router.get('/api/get-product', controllers.getProduct);
router.get('/api/get-orders', controllers.getOrders);
router.post('/api/remove-product', controllers.removeProduct);
router.post('/api/login', authenticate, controllers.login);
router.get('/api/me',  passportMiddleware.authenticationMiddleware, (req, res) => res.sendStatus(200));
router.post('/api/cancel-order', controllers.cancelOrder);
router.post('/api/change-order-status', controllers.changeOrderStatus);


export default router;
