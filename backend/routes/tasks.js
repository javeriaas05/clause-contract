// import express from 'express';
// import {
//     createTask,
//     getTasks,
//     getTaskById,
//     updateTask,
//     deleteTask,
//     forgetPassword
// } from '../controllers/taskController.js';
// import authMiddleware from '../middleware/auth.js';

// const router = express.Router();

// // All task routes are protected
// router.post('/', authMiddleware, createTask);
// router.get('/', authMiddleware, getTasks);
// router.get('/:id', authMiddleware, getTaskById);
// router.put('/:id', authMiddleware, updateTask);
// router.delete('/:id', authMiddleware, deleteTask);
// router.post('/forget-password', forgetPassword);

// export default router;













import { Router } from 'express';
import { 
  signup, 
  login, 
  getAllUsers, 
  getUserById, 
  updateUser, 
  deleteUser, 
  forgetPassword   // ✅ import from userController
}
 from '../controllers/userController.js';

const router = Router();

// ==================== AUTH ====================
router.post('/signup', signup);
router.post('/login', login);
router.post('/forget-password', forgetPassword); // ✅ new route

// ==================== USER CRUD ====================
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
