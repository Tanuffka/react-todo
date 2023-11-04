import { ChangeEvent, useState } from 'react';

import Icon from '@mdi/react';
import { mdiDelete, mdiPencil } from '@mdi/js';

import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useTodoContext } from '../../context/Todo';

import { StyledBox, StyledDescription } from './styled';

interface Props {
  id: string;
  description: string;
  completed: boolean;
}

export default function TodoItem({ id, description, completed }: Props) {
  const { removeTodo, editTodo, changeTodoStatus } = useTodoContext();

  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  const handleRemove = () => {
    removeTodo(id);
  };

  const handleSave = () => {
    if (!newDescription) {
      return;
    }

    editTodo(id, newDescription);
    setOpen(false);
  };

  const handleStatusChange = () => {
    changeTodoStatus(id, !completed);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewDescription(event.target.value);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleEditOpen = () => {
    setOpen(true);
  };

  const handleEditClose = () => {
    setNewDescription(description);
    setOpen(false);
  };

  const descriptionTextDecoration = completed ? 'line-through' : 'none';

  const completedTextHelper = completed
    ? 'Mark as uncompleted'
    : 'Mark as completed';

  return (
    <StyledBox onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Tooltip title={completedTextHelper} placement="left">
        <Checkbox checked={completed} onChange={handleStatusChange} />
      </Tooltip>
      <StyledDescription sx={{ textDecoration: descriptionTextDecoration }}>
        {description}
      </StyledDescription>
      <Dialog fullWidth open={open} onClose={handleEditClose}>
        <DialogTitle>Edit Todo</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            value={newDescription}
            variant="outlined"
            onChange={handleDescriptionChange}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleEditClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
      {isHovered && (
        <>
          <Tooltip title="Edit" placement="bottom">
            <IconButton onClick={handleEditOpen}>
              <Icon path={mdiPencil} size={1} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete" placement="bottom">
            <IconButton color="primary" onClick={handleRemove}>
              <Icon path={mdiDelete} size={1} color="grey" />
            </IconButton>
          </Tooltip>
        </>
      )}
    </StyledBox>
  );
}
