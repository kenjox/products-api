import express from 'express';

import authMiddleware from '../middlewares/auth-middleware.js';
import asyncWrapper from '../middlewares/async-wrapper.js';
import { all } from '../controllers/products.js';

const router = express.Router();

router.route('/').get(authMiddleware, asyncWrapper(all));

export default router;
