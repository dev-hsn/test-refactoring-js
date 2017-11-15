import express from 'express';

import { isAuth } from '../middleware/middleware';
import { index } from '../controllers/indexController';

const router =  express.Router();

router.get('/', isAuth, index);

export default router;