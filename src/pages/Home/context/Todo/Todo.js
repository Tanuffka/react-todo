import { useState, useEffect, createContext, useContext } from "react";

const TodoContext = createContext(null);

export default function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const createTodo = (description) => {
    const newTodo = {
      description,
      id: new Date().getTime(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const editTodo = (id, description) => {
    const editedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, description };
      }
      return todo;
    });
    setTodos(editedTodos);
  };

  const changeTodoStatus = (id, completed) => {
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
    <TodoContext.Provider
      value={{ todos, createTodo, removeTodo, editTodo, changeTodoStatus }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  return context;
};
