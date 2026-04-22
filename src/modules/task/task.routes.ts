import { Router } from 'express';
import { createTask, getTaskById, getTaskByUserId } from './task.controller';
import { authMiddleware } from '../../middlewares/authMiddleware';

const router = Router();

router.post('/', authMiddleware, createTask);
router.get('/:id', authMiddleware, getTaskById);
router.get('/user/:id', authMiddleware, getTaskByUserId);

export default router;