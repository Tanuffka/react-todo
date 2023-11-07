import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import PageContent from 'src/components/PageContent';
import { fetchTasks } from 'src/redux/tasks';
import { AppDispatch, RootState } from 'src/redux/store';

import TodoCreator from './components/TodoCreator';
import TodoItem from './components/TodoItem';
// import { useTodoContext } from './context/Todo';

export default function Home() {
  // const { todos } = useTodoContext();
  const dispatch = useDispatch<AppDispatch>();

  const { tasks } = useSelector((state: RootState) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <PageContent title="Home">
      <TodoCreator />
      {tasks.map((task) => (
        <TodoItem
          key={task._id}
          id={task._id}
          description={task.description}
          completed={task.completed}
        />
      ))}
    </PageContent>
  );
}
