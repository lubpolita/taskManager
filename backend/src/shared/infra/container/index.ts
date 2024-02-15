import { container } from 'tsyringe';
import { ITasksRepository } from '../../typeorm/repositories/Task/ITaskRepository';
import TaskRepository from '../../typeorm/repositories/Task/TaskRepository';

container.registerSingleton<ITasksRepository>('TaskRepository', TaskRepository);
