import "./styles.css";
import Icon from "@mdi/react";
import { mdiClose, mdiPencil } from "@mdi/js";

export default function TodoItem({
  id,
  description,
  completed,
  onRemoveTodo,
  onEditTodo,
}) {
  const handleRemove = () => {
    onRemoveTodo(id);
  };

  const handleEdit = () => {
    const newDescription = window.prompt("Edit todo", description);

    if (!newDescription) {
      return;
    }

    onEditTodo(id, newDescription);
  };

  return (
    <div className="todoitem">
      <div className="checkbox">
        <input type="checkbox" checked={completed} readOnly />
      </div>
      <div className="text">
        <p title={description}>{description}</p>
      </div>
      <button title="Edit" className="button" onClick={handleEdit}>
        <Icon path={mdiPencil} size={1} />
      </button>
      <button title="Delete" className="button" onClick={handleRemove}>
        <Icon path={mdiClose} size={1} />
      </button>
    </div>
  );
}
