import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createComment = async (req: Request, res: Response) => {
  const { content, taskId } = req.body;

  const user = (req as any).user;

  const comment = await prisma.comment.create({
    data: {
      content, // ❌ no sanitization
      taskId,
      userId: user.userId
    }
  });

  res.json(comment);
};

export const getCommentsByTask = async (req: Request, res: Response) => {
  const taskId = Number(req.params.taskId);

  const comments = await prisma.comment.findMany({
    where: { taskId }
  });

  res.json(comments);
};