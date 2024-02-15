import { Repository } from 'typeorm';
import { dataSource } from '../..';
import { ICreateTaskDTO } from '../../../../dtos/CreateTaskDTO';
import { Task } from '../../entities/Task';
import { ITasksRepository } from './ITaskRepository';

export default class TaskRepository implements ITasksRepository {
  private readonly ormRepository: Repository<Task>;

  constructor() {
    this.ormRepository = dataSource.getRepository(Task);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async create(data: ICreateTaskDTO): Promise<Task> {
    const task = this.ormRepository.create(data);
    await this.ormRepository.save(task);
    return task;
  }

  public async findById(id: string): Promise<Task | undefined> {
    const task = await this.ormRepository.findOne({ where: { id } });
    return task;
  }

  public async findAll(): Promise<Task[] | undefined> {
    const task = await this.ormRepository.find();
    return task;
  }

  public async findAllBacklog(): Promise<Task[] | undefined> {
    const task = await this.ormRepository.find({
      where: [{ status: 'backlog' }, { status: 'Backlog' }],
    });

    return task;
  }

  public async findAllInProcess(): Promise<Task[] | undefined> {
    const task = await this.ormRepository.find({
      where: [{ status: 'process' }, { status: 'Process' }],
    });

    return task;
  }

  public async findAllReview(): Promise<Task[] | undefined> {
    const task = await this.ormRepository.find({
      where: [{ status: 'review' }, { status: 'Review' }],
    });

    return task;
  }

  public async findAllFinished(): Promise<Task[] | undefined> {
    const task = await this.ormRepository.find({
      where: [{ status: 'finished' }, { status: 'Finished' }],
    });

    return task;
  }

  public async update(data: Task): Promise<Task> {
    const task = await this.ormRepository.save(data);
    return task;
  }
}
