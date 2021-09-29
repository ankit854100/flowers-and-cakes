import express from 'express'
import { addFeedback, getAllFeedbacks } from '../controllers/feedback.js'

const router = express.Router();

router.get('/', getAllFeedbacks);
router.post('/', addFeedback);

export default router;