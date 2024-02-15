/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { ITasksRepository } from '../../shared/typeorm/repositories/Task/ITaskRepository';

@injectable()
export default class UpdateTaskService {
  constructor(
    @inject('TaskRepository')
    private readonly taskRepository: ITasksRepository,
  ) {}

  public async execute({ id, title, description, status }): Promise<void> {
    if (!id) {
      throw new Error('Please, enter a valid Id');
    }

    const task = await this.taskRepository.findById(id);
    if (!task) {
      throw new Error('Id not found');
    }

    if (status) {
      task.status = status;
    }

    if (title) {
      task.title = title;
    }

    if (description) {
      task.description = description;
    }

    await this.taskRepository.update(task);
  }
}
