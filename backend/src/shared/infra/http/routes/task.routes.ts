import { Router } from 'express';
import { TaskController } from '../../../../controller/TaskController';

const taskController = new TaskController();
const taskRoutes = Router();

taskRoutes.post('/', taskController.create);

taskRoutes.get('/', taskController.findAll);
taskRoutes.get('/backlog', taskController.findAllBacklog);
taskRoutes.get('/in_process', taskController.findAllInProcess);
taskRoutes.get('/review', taskController.findAllReview);
taskRoutes.get('/finished', taskController.findAllFinished);

taskRoutes.delete('/delete/:id', taskController.delete);

taskRoutes.post('/update/:id', taskController.update);

taskRoutes.get('/:id', taskController.findById);

export default taskRoutes;
