import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import "../App.css";
import { createTask, getTasks } from "../api";
import { Task } from "../types";
import TaskModal from "./TaskModal";

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
    
    fetchTasks();
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
          sx={{
            borderRadius: "8px",
            width: "170px", 
            backgroundColor: "rgba(120, 111, 214, 0.5)", 
            color: "#fff", 
            fontFamily: "Poppins, sans-serif",
            fontWeight: 300, 
            fontSize: 12,
            '&:hover': {
              backgroundColor: "rgba(120, 111, 214, 0.7)", 
            }
          }}
          variant="outlined"
          onClick={handleAddClick}
        >
          Adicionar Tarefa
        </Button>
        <TaskModal 
          isOpen={isOpen}
          handleClose={handleClose}
          handleSave={handleAddTask}
        />
      </React.Fragment>
    </div>
  );
};

export default TaskColumnAddTask;
