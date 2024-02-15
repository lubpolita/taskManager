import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';

interface TaskModalProps {
    isOpen: boolean;
    handleClose: () => void;
    handleSave: (title: string, description: string, status: string) => void;
    initialTitle?: string;
    initialDescription?: string;
    initialStatus?: string;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, handleClose, handleSave, initialTitle = '', initialDescription = '', initialStatus = '' }) => {
    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState(initialDescription);
    const [status, setStatus] = useState(initialStatus);

    const handleSaveClick = () => {
        handleSave(title, description, status);
        handleClose();
    };

    return (
        <Dialog open={isOpen} onClose={handleClose}
            sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#333',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
            <DialogTitle>{initialTitle ? 'Editar Tarefa' : 'Adicionar Nova Tarefa'}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Insira o título, a descrição e o status da tarefa.
                </DialogContentText>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="title"
                    label="Título da Tarefa"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    required
                    margin="dense"
                    id="description"
                    label="Descrição da Tarefa"
                    type="text"
                    fullWidth
                    multiline 
                    rows={10} 
                    variant="standard"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Select
                    label="Status da Tarefa"
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    fullWidth
                    variant="standard"
                >
                    <MenuItem value="backlog">Backlog</MenuItem>
                    <MenuItem value="process">In Process</MenuItem>
                    <MenuItem value="review">Code Review</MenuItem>
                    <MenuItem value="finished">Finished</MenuItem>
                </Select>
            </DialogContent>
            <DialogActions>
                <Button
                    sx={{
                        backgroundColor: "rgba(120, 111, 214, 0.5)", 
                        color: "#fff", 
                        '&:hover': {
                          backgroundColor: "rgba(120, 111, 214, 0.7)", // Cor vermelha com 70% de opacidade ao passar o mouse
                        }
                    }}
                    onClick={handleClose}>Cancelar</Button>
                <Button
                    sx={{
                        backgroundColor: "rgba(120, 111, 214, 0.5)", 
                        color: "#fff", 
                        '&:hover': {
                          backgroundColor: "rgba(120, 111, 214, 0.7)", // Cor vermelha com 70% de opacidade ao passar o mouse
                        }
                    }}
                    onClick={handleSaveClick}>Salvar</Button>
            </DialogActions>
        </Dialog>
    );
};

export default TaskModal;