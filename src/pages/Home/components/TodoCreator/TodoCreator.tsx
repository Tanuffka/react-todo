import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import Tooltip from '@mui/material/Tooltip';

import { AppDispatch, RootState } from 'src/redux/store';
import { createTask } from 'src/redux/tasks';
import Button from 'src/components/Button';

// import { useTodoContext } from '../../context/Todo';

import { StyledOutlinedInput } from './styled';

type FormData = {
  task: string;
};

export default function TodoCreator() {
  // const { createTodo } = useTodoContext();
  const dispatch = useDispatch<AppDispatch>();
  const { isCreating } = useSelector((state: RootState) => state.tasks);

  const {
    register,
    formState: { errors },
    handleSubmit: handleRHFSubmit,
    resetField,
    clearErrors,
  } = useForm<FormData>();

  const handleSubmit = (data: FormData) => {
    dispatch(createTask(data.task)).then(() => {
      resetField('task');
    });
  };

  const handleFocusOut = () => {
    clearErrors();
  };

  return (
    <form onSubmit={handleRHFSubmit(handleSubmit)}>
      <Tooltip
        disableHoverListener
        title={errors.task?.message}
        open={!!errors.task}
      >
        <StyledOutlinedInput
          {...register('task', {
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
          error={!!errors.task}
          type="text"
          placeholder="Create your todo"
          endAdornment={
            <Button
              disableElevation
              loading={isCreating}
              variant="contained"
              disabled={isCreating}
              type="submit"
              sx={{
                minWidth: 84,
              }}
            >
              Create
            </Button>
          }
          onBlur={handleFocusOut}
        />
      </Tooltip>
    </form>
  );
}
