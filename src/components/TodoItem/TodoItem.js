import Icon from "@mdi/react";
import Checkbox from "@mui/material/Checkbox";
import { mdiPencil, mdiDelete } from "@mdi/js";
import IconButton from "@mui/material/IconButton";
import { StyledBox, StyledDescription } from "./styled";

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
    <StyledBox>
      <Checkbox type="checkbox" checked={completed} />
      <StyledDescription title={description}>{description}</StyledDescription>
      <IconButton title="Edit" onClick={handleEdit}>
        <Icon path={mdiPencil} size={1} />
      </IconButton>
      <IconButton color="primary" title="Delete" onClick={handleRemove}>
        <Icon path={mdiDelete} size={1} color="grey" />
      </IconButton>
    </StyledBox>
  );
}
