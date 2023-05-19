import './styles.css';

import Card from '../Card';
import PageTitle from '../PageTitle';
import TodoCreator from '../TodoCreator';
import TodoItem from '../TodoItem';
import { useState } from 'react';

const defaultTodos = [
    {
        id: 1,
        description: 'Todo item #1, next will be #2',
        completed: true,
    },
    {
        id: 2,
        description: 'Todo item #2, next will be #3',
        completed: true,
    },
    {
        id: 3,
        description: 'Todo item #3, next will be #4',
        completed: false,
    },
    {
        id: 4,
        description: 'Todo item #4, next will be #5',
        completed: true,
    },
];

export default function Content() {
    const [todos, setTodos] = useState(defaultTodos);

    return (
        <div className="content">
            <PageTitle />
            <Card>
                <TodoCreator />
                {todos.map((todo) => <TodoItem key={todo.id} description={todo.description} completed={todo.completed} />)}
            </Card>
        </div>
    );
}