import express from 'express';
import morgan from 'morgan';
import taskRoutes from './routes/task.routes';
import projectsRoutes from './routes/projects.routes';
const app = express();

// Middelwares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

// Routes 
app.use('/api/task/', taskRoutes);
app.use('/api/projects', projectsRoutes);


export default app;