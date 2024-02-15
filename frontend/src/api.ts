import axios from 'axios';
import { Task } from './types';

const api = axios.create({
  baseURL: 'http://localhost:3333', // substitua pela URL da sua API Node
});

export const getTasks = async () => {
  const response = await api.get<Task[]>('/task');
  return response.data;
};

export const getTasksInProcess = async () => {
    const response = await api.get<Task[]>('/task');
    return response.data;
};
  
export const getTasksReview = async () => {
    const response = await api.get<Task[]>('/task');
    return response.data;
};
  
export const getTasksFinished= async () => {
    const response = await api.get<Task[]>('/task');
    return response.data;
};
  
export const deleteTask= async (id: string) => {
    const response = await api.delete<Task[]>(`/task/delete/${id}`);
    return response.data;
};
  
export const createTask = async (task: Task) => {
    const newTaskWithoutId: Omit<Task, 'id'> = {
        title: task.title,
        description: task.description,
        status: task.status
    };

    const response = await api.post<Task[]>('/task', newTaskWithoutId);
    return response.data;
  };

  export const updateTask = async (id: string, title: string, description: string, status: string) => {

    const response = await api.post<Task[]>(`/task/update/${id}`, { title, description, status });
    return response.data;
  };