import TodoCreator from "./components/TodoCreator";
import TodoItem from "./components/TodoItem";
import PageContent from "../../components/PageContent";
import { useTodoContext } from "./context/Todo";

export default function Home() {
  const { todos } = useTodoContext();

  return (
    <PageContent title="Home">
      <TodoCreator />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          description={todo.description}
          completed={todo.completed}
        />
      ))}
    </PageContent>
  );
}
