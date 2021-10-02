import express from 'express'
import { addTransaction, getAllTransactions } from '../controllers/transactions.js';

const router = express.Router();

router.get('/', getAllTransactions);
router.post('/', addTransaction);

export default router;