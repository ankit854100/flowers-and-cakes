import express from 'express'
import {getAllFlowers, addFlower, updateFlower, deleteFlower, getOneFlower} from '../controllers/flower.js'

const router = express.Router();

router.get('/', getAllFlowers);
router.post('/addflower', addFlower);
router.patch('/:id', updateFlower);
router.delete('/:id', deleteFlower);
router.get('/:id', getOneFlower);

export default router;