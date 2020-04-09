import { Router } from 'express';
import {createProject, getProjects, getProject, deleteProject, updateProject} from '../controllers/projects.controller'
const router = Router();

router.get('/', getProjects);
router.get('/:id', getProject);
router.post('/', createProject);
router.delete('/:id', deleteProject);
router.put('/:id', updateProject);

export default router;