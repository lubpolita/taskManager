/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { ICreateTaskDTO } from '../../dtos/CreateTaskDTO';
import { Task } from '../../shared/typeorm/entities/Task';
import { ITasksRepository } from '../../shared/typeorm/repositories/Task/ITaskRepository';

@injectable()
export default class CreateTaskService {
  constructor(
    @inject('TaskRepository')
    private readonly taskRepository: ITasksRepository,
  ) {}

  public async execute(data: ICreateTaskDTO): Promise<Task> {
    const task = await this.taskRepository.create(data);
    return task;
  }
}
