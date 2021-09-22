import express from 'express'
import {getAllFlowers, addFlower, updateFlower} from '../controllers/flower.js'

const router = express.Router();

router.get('/', getAllFlowers);
router.post('/addflower', addFlower);
router.patch('/:id', updateFlower);

export default router;