import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
  
  interface ConfirmEditModalProps {
    isOpen: boolean;
    handleClose: () => void;
    handleConfirm: () => void;
  }
  
  const TaskEditModal: React.FC<ConfirmEditModalProps> = ({
    isOpen,
    handleClose,
    handleConfirm,
  }) => {
    return (
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Excluir Tarefa</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Você tem certeza de que deseja editar esta tarefa?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleConfirm} color="secondary">
            Excluir
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default TaskEditModal;
  