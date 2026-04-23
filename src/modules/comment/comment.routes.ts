import { Router } from 'express';
import { createComment, getCommentsByTask } from './comment.controller';
import { authMiddleware } from '../../middlewares/authMiddleware';

const router = Router();

router.post('/', authMiddleware, createComment);
router.get('/:taskId', authMiddleware, getCommentsByTask);

export default router;