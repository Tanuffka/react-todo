import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface TodoContextProps {
  children: ReactNode;
}

interface TodoSchema {
  _id: string;
  description: string;
  completed: boolean;
}

interface TodoContextResult {
  todos: TodoSchema[];
  createTodo: (description: string) => void;
  removeTodo: (id: string) => void;
  editTodo: (id: string, description: string) => void;
  changeTodoStatus: (id: string, compledted: boolean) => void;
}

const TodoContext = createContext<TodoContextResult>({
  todos: [],
  createTodo: () => {},
  removeTodo: () => {},
  editTodo: () => {},
  changeTodoStatus: () => {},
});

export default function TodoContextProvider({ children }: TodoContextProps) {
  const [todos, setTodos] = useState<TodoSchema[]>([]);

  const createTodo = (description: string) => {
    fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description }),
    })
      .then((response) => response.json())
      .then((task) => {
        setTodos([task, ...todos]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const removeTodo = (id: string) => {
    fetch(`/api/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((task) => {
        const filteredTodos = todos.filter((todo) => todo._id !== task._id);
        setTodos(filteredTodos);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const editTodo = (id: string, description: string) => {
    fetch(`/api/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description }),
    })
      .then((response) => response.json())
      .then((task) => {
        const updatedTodos = todos.map((todo) => {
          if (todo._id === id) {
            return task;
          }
          return todo;
        });
        setTodos(updatedTodos);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const changeTodoStatus = (id: string, completed: boolean) => {
    fetch(`/api/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed }),
    })
      .then((response) => response.json())
      .then((task) => {
        const editedTodos = todos.map((todo) => {
          if (todo._id === id) {
            return task;
          }
          return todo;
        });
        setTodos(editedTodos);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetch('/api/tasks')
      .then((response) => response.json())
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
