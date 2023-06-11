import './styles.css';

import Card from '../Card';
import PageTitle from '../PageTitle';
import TodoCreator from '../TodoCreator';
import TodoItem from '../TodoItem';
import { useState, useEffect } from 'react';

export default function Content() {
    const [todos, setTodos] = useState([]);

    // useEffect(() => {
    //     fetch('./data/todos.json')
    //         .then((response) => response.json())
    //         .then(({ data }) => {
    //             setTodos(data);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         })
    // }, []);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('./data/todos.json');
                const { data } = await response.json();

                setTodos(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchTodos();
    }, []);

    return (
        <div className="content">
            <PageTitle />
            <Card>
                <TodoCreator />
                {todos.map(todo => {
                    return (
                        <TodoItem
                            key={todo.id}
                            description={todo.description}
                            completed={todo.completed}
                        />
                    );
                })}
            </Card>
        </div>
    );
}