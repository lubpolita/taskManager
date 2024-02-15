import { ICreateTaskDTO } from '../../../../dtos/CreateTaskDTO';
import { Task } from '../../entities/Task';

export interface ITasksRepository {
  findById: (id: string) => Promise<Task | undefined>;
  create: (data: ICreateTaskDTO) => Promise<Task>;
  update: (data: Task) => Promise<Task>;
  delete(id: string): Promise<void>;
  findAll: () => Promise<Task[] | undefined>;
  findAllBacklog: () => Promise<Task[] | undefined>;
  findAllInProcess: () => Promise<Task[] | undefined>;
  findAllReview: () => Promise<Task[] | undefined>;
  findAllFinished: () => Promise<Task[] | undefined>;
}
