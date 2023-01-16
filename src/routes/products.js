import express from 'express';

import asyncWrapper from '../middlewares/async-wrapper.js';
import { all } from '../controllers/products.js';

const router = express.Router();

router.route('/').get(asyncWrapper(all));

export default router;
