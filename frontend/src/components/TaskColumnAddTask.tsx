import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import "../App.css";
import { createTask, getTasks } from "../api";
import { Task } from "../types";
import TaskModal from "./TaskModal"; // Importe o componente TaskModal

const TaskColumnAddTask: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const tasksData = await getTasks();
    setTasks(tasksData);
  };

  const handleAddTask = (
    title: string,
    description: string,
    status: string
  ) => {
    const newTask: Task = {
      id: Math.random().toString(),
      title,
      description,
      status,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    createTask(newTask)
      .then(() => {
        console.log("Nova tarefa adicionada com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao adicionar nova tarefa:", error);
      });

    setIsOpen(false);
  };

  function handleAddClick(): void {
    setIsOpen(true);
  }

  function handleClose(): void {
    setIsOpen(false);
  }

  return (
    <div className="add-task-container">
      <React.Fragment>
        <Button
          style={{
            borderRadius: 35,
            backgroundColor: "#333333",
            color: "#FFFFFF",
            borderColor: "#FFFFFF",
          }}
          variant="outlined"
          onClick={handleAddClick}
        >
          Adicionar Tarefa
        </Button>
        <TaskModal // Use o componente TaskModal aqui
          isOpen={isOpen}
          handleClose={handleClose}
          handleSave={handleAddTask}
        />
      </React.Fragment>
    </div>
  );
};

export default TaskColumnAddTask;
