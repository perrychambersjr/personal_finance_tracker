import { Router } from "express";
import { createUser, getUserById, getUsers, updateUser } from '../controllers/userController.ts';

const router = Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/', getUserById);
router.put('/', updateUser);

export default router;  