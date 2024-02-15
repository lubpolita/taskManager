/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { Task } from '../../shared/typeorm/entities/Task';
import { ITasksRepository } from '../../shared/typeorm/repositories/Task/ITaskRepository';

@injectable()
export default class FindAllInProcesservice {
  constructor(
    @inject('TaskRepository')
    private readonly taskRepository: ITasksRepository,
  ) {}

  public async execute(): Promise<Task[] | undefined> {
    const taskArray = await this.taskRepository.findAllInProcess();
    return taskArray;
  }
}
