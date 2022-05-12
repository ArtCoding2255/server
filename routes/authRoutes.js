import express from 'express';
const router = express.Router();
import {
  register,
  login,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  getUserProfile,
} from '../controllers/authController.js';

import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(register).get(protect, admin, getUsers);
router.route('/login').post(login);
router.route('/profile').get(protect, getUserProfile);

router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);
export default router;
