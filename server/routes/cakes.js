import express from 'express'
import {getAllCakes, addCake} from '../controllers/cake.js'

const router = express.Router();

router.get('/', getAllCakes);
router.post('/addCake', addCake);

export default router;