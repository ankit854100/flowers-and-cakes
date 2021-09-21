import express from 'express'
import {getAllCakes, addCake, updateCake} from '../controllers/cake.js'

const router = express.Router();

router.get('/', getAllCakes);
router.post('/addCake', addCake);
router.patch('/:id', updateCake)

export default router;