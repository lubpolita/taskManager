import { Box, Divider, List, Typography, colors } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getTasksReview } from "../api";
import { Task } from "../types";
import TaskItem from "./TaskItem";

const TaskColumnReview: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const tasksData = await getTasksReview();

    setTasks(tasksData);
  };

  const handleTaskDelete = () => {
    fetchTasks();
  };
  

  return (
    <Box
      sx={{
        border: "1px solid grey",
        borderRadius: "5px",
        padding: "10px",
        height: "100%",
        minWidth: "300px",
        margin: "10px",
      }}
    >
      <Typography variant="h4">Code Review</Typography>

      <Divider variant="middle" sx={{ borderColor: colors.grey[500] }} />
      <List>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleTaskDelete}
          />
        ))}
      </List>
    </Box>
  );
};

export default TaskColumnReview;
