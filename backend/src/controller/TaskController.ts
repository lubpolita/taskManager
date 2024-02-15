import { Request, Response } from 'express';
import 'reflect-metadata';
import { container } from 'tsyringe';
import CreateTaskService from '../services/Task/CreateTaskService';
import DeleteTaskService from '../services/Task/DeleteTaskService';
import FindAllBacklogService from '../services/Task/FindAllBacklogService';
import FindAllFinishedService from '../services/Task/FindAllFinishedService';
import FindAllInProcessService from '../services/Task/FindAllInProcessService';
import FindAllReviewService from '../services/Task/FindAllReviewService';
import FindAllTaskService from '../services/Task/FindAllTasksService';
import FindByIdService from '../services/Task/FindByIdService';
import UpdateTaskService from '../services/Task/UpdateTaskService';

export class TaskController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const createTask = container.resolve(CreateTaskService);
      const task = await createTask.execute(request.body);
      console.dir(task);
      return response.status(201).json(task);
    } catch (err) {
      console.error(err);
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  public async findById(
    request: Request,
    response: Response,
  ): Promise<Response | undefined> {
    try {
      const find = container.resolve(FindByIdService);
      const { id } = request.params;
      const task = await find.execute(id);
      console.dir(task);
      return response.status(201).json(task);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  public async findAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    try {
      const findAllTask = container.resolve(FindAllTaskService);
      const taskArray = await findAllTask.execute();
      return response.status(201).json(taskArray);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  public async findAllBacklog(
    request: Request,
    response: Response,
  ): Promise<Response> {
    try {
      const findAllTask = container.resolve(FindAllBacklogService);
      const taskArray = await findAllTask.execute();
      return response.status(201).json(taskArray);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  public async findAllInProcess(
    request: Request,
    response: Response,
  ): Promise<Response> {
    try {
      const findAllTask = container.resolve(FindAllInProcessService);
      const taskArray = await findAllTask.execute();
      return response.status(201).json(taskArray);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  public async findAllReview(
    request: Request,
    response: Response,
  ): Promise<Response> {
    try {
      const findAllTask = container.resolve(FindAllReviewService);
      const taskArray = await findAllTask.execute();
      return response.status(201).json(taskArray);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  public async findAllFinished(
    request: Request,
    response: Response,
  ): Promise<Response> {
    try {
      const findAllTask = container.resolve(FindAllFinishedService);
      const taskArray = await findAllTask.execute();
      return response.status(201).json(taskArray);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const deleteTask = container.resolve(DeleteTaskService);
      const { id } = request.params;
      await deleteTask.execute(id);
      return response.status(201).json();
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const updateTask = container.resolve(UpdateTaskService);
      const { id } = request.params;
      const { title, description, status } = request.body;

      const task = await updateTask.execute({ id, title, description, status });
      console.dir(task);
      return response.status(201).json(task);
    } catch (err) {
      console.error(err);
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}
