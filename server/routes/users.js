import express from 'express'
import {addUser, getAllUsers, updateUser, deleteUser, getOneUser, getByEmail} from '../controllers/user.js'

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', addUser);

router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/:id', getOneUser);

router.get('/email/:email', getByEmail);

export default router;
