import express from 'express';
import { createWorkout, getUserWorkouts } from '../controllers/workoutController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createWorkout);
router.get('/', authMiddleware, getUserWorkouts);

export default router;