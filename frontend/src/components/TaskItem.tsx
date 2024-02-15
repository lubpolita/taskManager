import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { deleteTask, updateTask } from '../api';
import { Task } from '../types';
import ConfirmDeleteModal from './ConfirmDeleteModal';

interface TaskItemProps {
  task: Task;
  onDelete: (taskId: string) => void; 
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editedTaskTitle, setEditedTaskTitle] = useState(task.title);
  const [editedTaskDescription, setEditedTaskDescription] = useState(task.description);
  const [selectedStatus, setSelectedStatus] = useState(task.status);


  const handleDeleteConfirm = () => {
    deleteTask(task.id)
      .then(() => {
        onDelete(task.id);
      })
      .catch((error) => {
        console.error("Erro ao excluir tarefa:", error);
      });
    setIsDeleteModalOpen(false);
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditSave = () => {
    updateTask(
      task.id,
      editedTaskTitle,
      editedTaskDescription,
      selectedStatus
    );
    setIsEditing(false);
  };

  return (
    <Box
      sx={{
        marginBottom: "10px",
        padding: "10px",
        border: "1px solid grey",
        borderRadius: "5px",
      }}
    >
      {isEditing ? (
        <Box>
          <TextField
            name="title"
            value={editedTaskTitle}
            onChange={e => setEditedTaskTitle(e.target.value)}
            label="Título"
            margin="normal"
            fullWidth
          />
          <TextField
            name="description"
            label="Descrição"
            multiline
            rows={4}
            value={editedTaskDescription}
            onChange={e => setEditedTaskDescription(e.target.value)}
            margin="normal"
            fullWidth
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="task-status-label">Status da Tarefa</InputLabel>
            <Select
              labelId="task-status-label"
              id="task-status"
              name="status"
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
            >
              <MenuItem value="Backlog">Backlog</MenuItem>
              <MenuItem value="In Process">In Process</MenuItem>
              <MenuItem value="Code Review">Code Review</MenuItem>
              <MenuItem value="Finished">Finished</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={handleEditSave}>
            Salvar
          </Button>
        </Box>
      ) : (
        <Box>
          <Box fontWeight="bold" marginBottom="10px">
            {task.title}
          </Box>
          <Box marginBottom="10px">{task.description}</Box>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDeleteClick}
            style={{ marginRight: "10px" }}
          >
            Excluir
          </Button>
          <Button variant="contained" onClick={handleEditClick}>
            Editar
          </Button>
        </Box>
      )}
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        handleClose={() => setIsDeleteModalOpen(false)}
        handleConfirm={handleDeleteConfirm}
      />
    </Box>
  );
};

export default TaskItem;
