import express from 'express'
import { addNewsLetter, getAllNewsLetters } from '../controllers/newsletter.js'

const router = express.Router();

router.get('/', getAllNewsLetters);
router.post('/', addNewsLetter);

export default router;