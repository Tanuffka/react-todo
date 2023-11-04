import PageContent from 'src/components/PageContent';

import TodoCreator from './components/TodoCreator';
import TodoItem from './components/TodoItem';
import { useTodoContext } from './context/Todo';

export default function Home() {
  const { todos } = useTodoContext();

  return (
    <PageContent title="Home">
      <TodoCreator />
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          id={todo._id}
          description={todo.description}
          completed={todo.completed}
        />
      ))}
    </PageContent>
  );
}
