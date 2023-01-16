import express from 'express';
import { all } from '../controllers/products.js';

const router = express.Router();

router.route('/').get(all);

export default router;
