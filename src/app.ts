import express from 'express';
import path from 'path';
import authRoutes from './modules/auth/auth.routes';
import taskRoutes from './modules/task/task.routes';
import commentRoutes from './modules/comment/comment.routes';
import fileRoutes from './modules/file/file.routes';

const app = express();

app.use(express.json());

// routes
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);
app.use('/comments', commentRoutes);
app.use('/files', fileRoutes);

app.use(express.static(path.join(__dirname, '../public')));

export default app;