import express from 'express'
import {getAllFlowers, addFlower, updateFlower, deleteFlower} from '../controllers/flower.js'

const router = express.Router();

router.get('/', getAllFlowers);
router.post('/addflower', addFlower);
router.patch('/:id', updateFlower);
router.delete('/:id', deleteFlower);

export default router;