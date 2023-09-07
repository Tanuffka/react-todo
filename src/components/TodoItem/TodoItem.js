import './styles.css';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

export default function TodoItem({id, description, completed, onRemoveTodo}) {
    const handleRemove = () => {
        onRemoveTodo(id);
    }

    return (
        <div className="todoitem">
            <div className="checkbox">
                <input type="checkbox" checked={completed} readOnly/>
            </div>
            <div className="text">
                <p title={description}>{description}</p>
            </div>
            <button title="Delete" className="button" onClick={handleRemove}>
                <Icon path={mdiClose} size={1} />
            </button>
        </div>
    );
}