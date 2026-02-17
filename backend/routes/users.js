import { Router } from 'express';
import { signup, login, getAllUsers, getUserById, updateUser, deleteUser, forgetPassword } from '../controllers/userController.js';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/forget-password', forgetPassword);

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);


export default router;
