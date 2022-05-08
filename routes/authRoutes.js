import express from 'express';
const router = express.Router();
/*import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js';*/

import { register, login } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/register').post(register);
router.route('/login').post(login);

export default router;
