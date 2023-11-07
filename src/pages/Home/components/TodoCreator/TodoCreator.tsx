import { ChangeEvent, useState } from 'react';

import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';

import { AppDispatch } from 'src/redux/store';
import { createTask } from 'src/redux/tasks';

// import { useTodoContext } from '../../context/Todo';

import { StyledOutlinedInput } from './styled';
export default function TodoCreator() {
  // const { createTodo } = useTodoContext();
  const dispatch = useDispatch<AppDispatch>();

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
        <Button disableElevation variant="contained" onClick={handleCreate}>
          Create
        </Button>
      }
      value={text}
      onChange={handleChange}
    />
  );
}
