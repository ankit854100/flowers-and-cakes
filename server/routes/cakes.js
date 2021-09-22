import express from 'express'
import {getAllCakes, addCake, updateCake, deleteCake} from '../controllers/cake.js'

const router = express.Router();

router.get('/', getAllCakes);
router.post('/addCake', addCake);
router.patch('/:id', updateCake);
router.delete('/:id', deleteCake);

export default router;