import { Box, Button, FormControl, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { deleteTask, updateTask } from '../api';
import { Task } from '../types';
import ConfirmDeleteModal from './ConfirmDeleteModal';

interface TaskItemProps {
  task: Task;
  onDelete: (taskId: string) => void; 
  onUpdate: () => void; 
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onUpdate }) => {
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
    ).then(() => {
      onUpdate();
    })
    .catch((error) => {
      console.error("Erro ao excluir tarefa:", error);
    });
    setIsEditing(false);
  };

  return (
    <Box
      sx={{
        marginBottom: "10px",
        backgroundColor: "rgba(28, 28, 48, 1.0)", // Cor branca para o quadrado
        padding: "20px",
        borderRadius: "5px",
        textAlign: "center",
      }}
    >
      {isEditing ? (
        <Box sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          color: '#333',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
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
            {/* <InputLabel id="task-status-label">Status da Tarefa</InputLabel> */}
            <Select
              labelId="task-status-label"
              id="task-status"
              name="status"
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
            >
              <MenuItem value="backlog">Backlog</MenuItem>
              <MenuItem value="process">In Process</MenuItem>
              <MenuItem value="review">Code Review</MenuItem>
              <MenuItem value="finished">Finished</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained"
            sx={{
              borderRadius: "8px",
              width: "170px", 
              backgroundColor: "rgba(120, 111, 214, 0.5)", 
              color: "#fff", 
              fontFamily: "Poppins, sans-serif",
              fontWeight: 300,
                textTransform: 'none',
                fontStyle: 'normal',
              '&:hover': {
                backgroundColor: "rgba(120, 111, 214, 0.7)", 
              }
            }}
              onClick={ handleEditSave } >
            Salvar
          </Button>
        </Box>
      ) : (
        <Box>
          <Box sx={{ fontFamily: 'Poppins', fontSize: 20, fontWeight: 500 }}> {task.title} </Box>
          <Box sx={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: 200, fontStyle: 'normal', marginTop: 4, marginBottom: 8 }} >{task.description}</Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgba(0.796, 0.404, 0.541, 0.5)", 
              fontFamily: 'Poppins',
              fontWeight: 300,
              textTransform: 'none',
              fontStyle: 'normal',
              color: "#fff", 
              '&:hover': {
                backgroundColor: "rgba(0.796, 0.404, 0.541, 0.7)", 
              }
            }}
            onClick={handleDeleteClick}
            style={{ marginRight: "10px" }}
          >
            Excluir
          </Button>
            <Button variant="contained"
              sx={{
              backgroundColor: "rgba(120, 111, 214, 0.5)", 
              color: "#fff", 
              fontFamily: 'Poppins',
              fontWeight: 300,
              textTransform: 'none',
              fontStyle: 'normal',
              '&:hover': {
                backgroundColor: "rgba(120, 111, 214, 0.7)", 
              }
            }} onClick={handleEditClick}>
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
