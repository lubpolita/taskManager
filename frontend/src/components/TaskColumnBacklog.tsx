import { TableRowsOutlined } from "@mui/icons-material";
import { Box, Divider, List, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getTasks } from "../api";
import { Task } from "../types";
import TaskItem from "./TaskItem";

const TaskColumnBacklog: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const tasksData = await getTasks();
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
      overflowY: "hidden", 
      minWidth: "300px",
      margin: "10px",
      backgroundColor: "rgba(20, 20, 37, 1.0)",
      boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)", 
      backdropFilter: "blur(10px) brightness(80%)", 
      WebkitBackdropFilter: "blur(10px) brightness(80%)",

      '&:hover': {
        overflowY: "auto",
      },
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
      <Divider variant="middle" sx={{ borderColor: 'transparent', margin: '8px 0' }} />
      <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 8 }}>
        <TableRowsOutlined /> 
        <Typography variant="h4" sx={{ fontFamily: 'Poppins', fontSize: 30, fontWeight: 'bold', marginLeft: '8px' }}>
          Backlog
        </Typography>
      </Box>
      <Divider variant="middle" sx={{ borderColor: 'transparent', margin: '8px 0' }} />
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

export default TaskColumnBacklog;
