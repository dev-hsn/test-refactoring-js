import express from 'express';

import { isAuth } from '../../middleware/middleware';
import { 
    product_list, 
    product, 
    product_checkout 
} from '../../controllers/productController';

const router =  express.Router();

router.get('/list', isAuth, product_list);
router.get('/view/:id', isAuth, product);
router.get('/cart/:id', isAuth, product_checkout);

export default router;