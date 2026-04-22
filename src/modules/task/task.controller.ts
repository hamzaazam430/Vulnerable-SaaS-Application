import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createTask = async (req: Request, res: Response) => {
    const { title, description, projectId, assignedTo } = req.body;

    const task = await prisma.task.create({
        data: {
            title,
            description,
            projectId: +projectId,
            assignedTo: +assignedTo
        }
    });

    res.json(task);
};

export const getTaskById = async (req: Request, res: Response) => {
    const taskId = Number(req.params.id);

    const task = await prisma.task.findUnique({
        where: { id: taskId }
    });

    // ❌ NO organization check → IDOR vulnerability
    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
};

export const getTaskByUserId = async (req: Request, res: Response) => {
    const userId = Number(req.params.id);

    const task = await prisma.task.findFirst({
        where: { assignedTo: userId }
    });

    // ❌ NO organization check → IDOR vulnerability
    if (!task) {
        return res.status(404).json({ message: "Tasks not found" });
    }

    res.json(task);
};

export const searchTasks = async (req: Request, res: Response) => {

    const search = req.query.search as string;

    const query = `
    SELECT * FROM "Task"
    WHERE title LIKE '%${search}%'
  `;

    const tasks = await prisma.$queryRawUnsafe(query);

    res.json(tasks);
}