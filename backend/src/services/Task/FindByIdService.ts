/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { Task } from '../../shared/typeorm/entities/Task';
import { ITasksRepository } from '../../shared/typeorm/repositories/Task/ITaskRepository';

@injectable()
export default class FindByIdService {
  constructor(
    @inject('TaskRepository')
    private readonly taskRepository: ITasksRepository,
  ) {}

  public async execute(id: string): Promise<Task | undefined> {
    const task = await this.taskRepository.findById(id);
    return task;
  }
}
