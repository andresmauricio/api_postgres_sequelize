import { Router } from 'express';
import {getTask} from '../controllers/task.controller';
const router = Router();

router.get('/', getTask);

export default router;