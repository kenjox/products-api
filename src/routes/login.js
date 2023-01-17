import express from 'express';

import authController from '../controllers/auth.js';
import asyncWrapper from '../middlewares/async-wrapper.js';

const router = express.Router();

router.route('/').post(asyncWrapper(authController));

export default router;
