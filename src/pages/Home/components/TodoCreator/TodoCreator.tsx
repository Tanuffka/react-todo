import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';

import { AppDispatch, RootState } from 'src/redux/store';
import { createTask } from 'src/redux/tasks';

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
  } = useForm<FormData>();

  const handleSubmit = (data: FormData) => {
    dispatch(createTask(data.task)).then(() => {
      resetField('task');
    });
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
              variant="contained"
              disabled={isCreating}
              type="submit"
            >
              {isCreating && (
                <CircularProgress
                  size={25}
                  style={{
                    minWidth: '60px',
                  }}
                  sx={{
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                />
              )}
              {!isCreating && <Typography>Create</Typography>}
            </Button>
          }
        />
      </Tooltip>
    </form>
  );
}
