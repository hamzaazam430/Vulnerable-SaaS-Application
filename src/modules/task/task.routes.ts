import { Router } from 'express';
import { createTask, getTaskById } from './task.controller';
import { authMiddleware } from '../../middlewares/authMiddleware';

const router = Router();

router.post('/', authMiddleware, createTask);
router.get('/:id', authMiddleware, getTaskById);

export default router;