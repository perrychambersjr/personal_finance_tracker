import { Router } from 'express';
import { login, signup } from '../controllers/authController.ts';
import { createGoal, getGoals } from '../controllers/goalController.ts';

const router = Router();

router.get('/', getGoals);
router.post('/', createGoal);

export default router;