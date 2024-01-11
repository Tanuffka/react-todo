import { useState } from 'react';

import { useForm } from 'react-hook-form';
import Icon from '@mdi/react';
import { mdiDelete, mdiPencil } from '@mdi/js';
import { useDispatch, useSelector } from 'react-redux';

import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

import { AppDispatch, RootState } from 'src/redux/store';
import { editTask, removeTask } from 'src/redux/tasks';
import Button from 'src/components/Button';
import Checkbox from 'src/components/Checkbox';
import IconButton from 'src/components/IconButton';

// import { useTodoContext } from '../../context/Todo';

import { StyledBox, StyledDescription } from './styled';

type FormData = {
  description: string;
  completed: boolean;
};

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

  const {
    register,
    formState: { errors },
    handleSubmit: handleRHFSave,
    resetField,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      description,
      completed,
    },
  });

  const watchDescription = watch('description');

  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);

  const handleRemove = () => {
    // removeTodo(id);
    dispatch(removeTask(id));
  };

  const handleSave = (data: FormData) => {
    // editTodo(id, newDescription);
    dispatch(
      editTask({ _id: id, description: data.description, completed })
    ).then(() => {
      setOpen(false);
    });
  };

  const handleStatusChange = () => {
    dispatch(
      editTask({
        _id: id,
        description,
        completed: !completed,
      })
    );
    // changeTodoStatus(id, !completed);
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
    setOpen(false);
    resetField('description');
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
  const isSaveDisabled = description === watchDescription;

  return (
    <StyledBox onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Checkbox
        tooltipPlacement="left"
        tooltipTitle={completedTextHelper}
        loading={isEditing}
        checked={completed}
        disabled={isEditing || isDeleting}
        onClick={handleStatusChange}
      />
      <StyledDescription sx={{ textDecoration: descriptionTextDecoration }}>
        {description}
      </StyledDescription>
      <Dialog fullWidth open={open} onClose={handleEditClose}>
        <DialogTitle>Edit Todo</DialogTitle>
        <form onSubmit={handleRHFSave(handleSave)}>
          <DialogContent>
            <TextField
              {...register('description', {
                required: {
                  value: true,
                  message: 'This field is required',
                },
                minLength: {
                  value: 3,
                  message: 'Should not be less than 3 symbols',
                },
                maxLength: {
                  value: 30,
                  message: 'Should not be larger than 30 symbols',
                },
              })}
              fullWidth
              type="text"
              helperText={errors.description?.message}
              variant="outlined"
              error={!!errors.description}
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
              loading={isEditing}
              type="submit"
              variant="contained"
              disabled={isEditing || isSaveDisabled}
              sx={{
                minWidth: 80,
              }}
            >
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      {isHovered && (
        <>
          <IconButton
            tooltipTitle="Edit"
            tooltipPlacement="bottom"
            loading={isEditing}
            disabled={isDeleting}
            onClick={handleEditOpen}
          >
            <Icon path={mdiPencil} size={1} />
          </IconButton>
          <IconButton
            tooltipTitle="Delete"
            tooltipPlacement="bottom"
            color="primary"
            loading={isDeleting}
            disabled={isDeleting}
            onClick={handleRemove}
          >
            <Icon path={mdiDelete} size={1} color="grey" />
          </IconButton>
        </>
      )}
    </StyledBox>
  );
}
