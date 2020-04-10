import { Router } from 'express';
import {getTasks, createTask, getTask} from '../controllers/task.controller';
const router = Router();

router.get('/', getTasks);
router.get('/:id', getTask);
router.post('/', createTask);

export default router;