import TodoCreator from "./components/TodoCreator";
import TodoItem from "./components/TodoItem";
import { useState, useEffect } from "react";
import PageContent from "../../components/PageContent";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const handleCreateTodo = (description) => {
    const newTodo = {
      description,
      id: new Date().getTime(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const handleRemoveTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleEditTodo = (id, description) => {
    const editedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, description };
      }
      return todo;
    });
    setTodos(editedTodos);
  };

  const handleChangeStatus = (id, completed) => {
    const editedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed };
      }
      return todo;
    });
    setTodos(editedTodos);
  };

  useEffect(() => {
    fetch("data/todos.json")
      .then((data) => data.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <PageContent title="Home">
      <TodoCreator onCreateTodo={handleCreateTodo} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          description={todo.description}
          completed={todo.completed}
          onRemoveTodo={handleRemoveTodo}
          onEditTodo={handleEditTodo}
          onChangeStatus={handleChangeStatus}
        />
      ))}
    </PageContent>
  );
}
