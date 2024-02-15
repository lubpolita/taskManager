import { Box, Divider, List, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getTasksFinished } from "../api";
import { Task } from "../types";
import TaskItem from "./TaskItem";

const TaskColumnFinished: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const tasksData = await getTasksFinished();
    setTasks(tasksData);
  };

  const handleTaskDelete = () => {
    fetchTasks();
  };

  const handleTaskUpdate = () => {
    fetchTasks();
  };

  return (
    <Box
      sx={{
        borderRadius: "15px", 
        padding: "10px",
        height: "100%",
        minHeight: "600px",
        maxHeight: "600px",
        overflowY: "auto", 
        minWidth: "300px",
        margin: "10px",
        backgroundColor: "rgba(20, 20, 37, 1.0)",
        boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)", 
        backdropFilter: "blur(10px) brightness(80%)", 
        WebkitBackdropFilter: "blur(10px) brightness(80%)",

       
    '&::-webkit-scrollbar': {
      width: '8px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)', 
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#6c63ff',  
      borderRadius: '8px',  
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#4a45b2', 
    },
      }}
    >
      <Typography variant="h4">Finished</Typography>
      <Divider variant="middle" sx={{ borderColor: 'transparent', margin: '20px 0' }} />
      <List>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onUpdate={handleTaskUpdate}
            onDelete={handleTaskDelete}
          />
        ))}
      </List>
    </Box>
  );
};

export default TaskColumnFinished;
