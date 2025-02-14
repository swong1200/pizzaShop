import express from 'express';
const router = express.Router();
import createOrder from '../controllers/ordersController';

// POST /orders - Create a new order
router.post('/', createOrder);

export default router;