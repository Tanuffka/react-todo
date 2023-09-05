import "./styles.css";

import Card from "../Card";
import PageTitle from "../PageTitle";
import TodoCreator from "../TodoCreator";
import TodoItem from "../TodoItem";
import { useState, useEffect } from "react";

export default function Content() {
  const [todos, setTodos] = useState([]);

  const handleCreateTodo = (description) => {
    const newTask = {
      description,
      id: new Date().getTime(),
      completed: false,
    };

    setTodos([...todos, newTask]);
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
    <div className="content">
      <PageTitle />
      <Card>
        <TodoCreator onCreateTodo={handleCreateTodo}/>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            description={todo.description}
            completed={todo.completed}
          />
        ))}
      </Card>
    </div>
  );
}
