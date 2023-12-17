import { ChangeEvent, useState } from 'react';

import Icon from '@mdi/react';
import { mdiDelete, mdiPencil } from '@mdi/js';
import { useDispatch, useSelector } from 'react-redux';

import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { AppDispatch, RootState } from 'src/redux/store';
import { editTask, removeTask } from 'src/redux/tasks';

// import { useTodoContext } from '../../context/Todo';

import { StyledBox, StyledDescription } from './styled';

interface Props {
  id: string;
  description: string;
  completed: boolean;
}

export default function TodoItem({ id, description, completed }: Props) {
  // const { editTodo, changeTodoStatus } = useTodoContext();
  const dispatch = useDispatch<AppDispatch>();
  const { editingTaskId, removingTaskId } = useSelector(
    (state: RootState) => state.tasks
  );

  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  const handleRemove = () => {
    // removeTodo(id);
    dispatch(removeTask(id));
  };

  const handleSave = () => {
    if (!newDescription) {
      return;
    }

    // editTodo(id, newDescription);
    dispatch(
      editTask({ _id: id, description: newDescription, completed })
    ).then(() => {
      setOpen(false);
    });
  };

  const handleStatusChange = () => {
    dispatch(
      editTask({ _id: id, description: newDescription, completed: !completed })
    );
    // changeTodoStatus(id, !completed);
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

  const handleEditCancel = () => {
    setNewDescription(description);
    setOpen(false);
  };

  const handleEditClose: DialogProps['onClose'] = (_event, reason) => {
    if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
      return;
    }

    handleEditCancel();
  };

  const descriptionTextDecoration = completed ? 'line-through' : 'none';

  const completedTextHelper = completed
    ? 'Mark as uncompleted'
    : 'Mark as completed';

  const isEditing = id === editingTaskId;
  const isDeleting = id === removingTaskId;

  return (
    <StyledBox onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Box
        sx={{
          height: 42,
          width: 42,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isEditing && <CircularProgress size={20} thickness={5} />}
        {!isEditing && (
          <Tooltip title={completedTextHelper} placement="left">
            <Checkbox
              checked={completed}
              disabled={isEditing || isDeleting}
              onClick={handleStatusChange}
            />
          </Tooltip>
        )}
      </Box>
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
          <Button
            variant="outlined"
            disabled={isEditing}
            onClick={handleEditCancel}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={isEditing}
            sx={{
              minWidth: 80,
            }}
            onClick={handleSave}
          >
            {isEditing && (
              <CircularProgress
                size={25}
                sx={{
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              />
            )}
            {!isEditing && <Typography>Save</Typography>}
          </Button>
        </DialogActions>
      </Dialog>
      {isHovered && (
        <>
          <Tooltip title="Edit" placement="bottom">
            <IconButton disabled={isDeleting} onClick={handleEditOpen}>
              <Icon path={mdiPencil} size={1} />
            </IconButton>
          </Tooltip>
          <Box
            sx={{
              height: 42,
              width: 42,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isDeleting && <CircularProgress size={20} thickness={5} />}
            {!isDeleting && (
              <Tooltip title="Delete" placement="bottom">
                <IconButton
                  color="primary"
                  disabled={isDeleting}
                  onClick={handleRemove}
                >
                  <Icon path={mdiDelete} size={1} color="grey" />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        </>
      )}
    </StyledBox>
  );
}
