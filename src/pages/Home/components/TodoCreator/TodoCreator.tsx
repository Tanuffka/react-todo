import { ChangeEvent, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { AppDispatch, RootState } from 'src/redux/store';
import { createTask } from 'src/redux/tasks';

// import { useTodoContext } from '../../context/Todo';

import { StyledOutlinedInput } from './styled';
export default function TodoCreator() {
  // const { createTodo } = useTodoContext();
  const dispatch = useDispatch<AppDispatch>();
  const { isCreating } = useSelector((state: RootState) => state.tasks);

  const [text, setText] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleCreate = () => {
    if (text.trim() === '') return;

    // createTodo(text);
    dispatch(createTask(text));
    setText('');
  };

  return (
    <StyledOutlinedInput
      fullWidth
      placeholder="Create your todo"
      endAdornment={
        <Button
          disableElevation
          variant="contained"
          disabled={isCreating}
          onClick={handleCreate}
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
      value={text}
      onChange={handleChange}
    />
  );
}
