import express from 'express'
import {getAllFlowers, addFlower} from '../controllers/flower.js'

const router = express.Router();

router.get('/', getAllFlowers);
router.post('/addflower', addFlower);


export default router;