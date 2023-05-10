import './styles.css';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

const todoItemText = 'Here is my 1st todo item Here is my 1st todo item Here is my 1st todo item Here is my 1st todo item';

export default function TodoItem() {
    return (
        <div className="todoitem">
            <div className="checkbox">
                <input type="checkbox" />
            </div>
            <div className="text">
                <p title={todoItemText}>{todoItemText}</p>
            </div>
            <button title="Delete" className="button">
                <Icon path={mdiClose} size={1} />
            </button>
        </div>
    );
} 