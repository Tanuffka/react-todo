import './styles.css';
import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

export default function TodoItem({description, completed}) {
    return (
        <div className="todoitem">
            <div className="checkbox">
                <input type="checkbox" checked={completed}/>
            </div>
            <div className="text">
                <p title={description}>{description}</p>
            </div>
            <button title="Delete" className="button">
                <Icon path={mdiClose} size={1} />
            </button>
        </div>
    );
}