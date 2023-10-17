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
  id: number;
  description: string;
  completed: boolean;
}

interface TodoContextResult {
  todos: TodoSchema[];
  createTodo: (description: string) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, description: string) => void;
  changeTodoStatus: (id: number, compledted: boolean) => void;
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
    const newTodo = {
      description,
      id: new Date().getTime(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const editTodo = (id: number, description: string) => {
    const editedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, description };
      }
      return todo;
    });
    setTodos(editedTodos);
  };

  const changeTodoStatus = (id: number, completed: boolean) => {
    const editedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed };
      }
      return todo;
    });
    setTodos(editedTodos);
  };

  useEffect(() => {
    fetch('data/todos.json')
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
