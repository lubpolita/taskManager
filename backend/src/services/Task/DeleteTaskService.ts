/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { ITasksRepository } from '../../shared/typeorm/repositories/Task/ITaskRepository';

@injectable()
export default class DeleteTaskService {
  constructor(
    @inject('TaskRepository')
    private readonly taskRepository: ITasksRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const taskExists = await this.taskRepository.findById(id);
    if (!taskExists) {
      throw new Error('Invalid task id');
    }

    await this.taskRepository.delete(id);
  }
}
