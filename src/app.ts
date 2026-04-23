import express from 'express';
import authRoutes from './modules/auth/auth.routes';
import taskRoutes from './modules/task/task.routes';
import commentRoutes from './modules/comment/comment.routes';
import path, { dirname } from 'path';

const app = express();

app.use(express.json());

// routes
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);
app.use('/comments', commentRoutes);

app.use(express.static(path.join(__dirname, '../public')));

export default app;