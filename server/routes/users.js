import express from 'express'
import {addUser, getAllUsers} from '../controllers/user.js'

const router = express.Router();

router.get('/', getAllUsers);
router.get('/adduser', addUser);

export default router;
