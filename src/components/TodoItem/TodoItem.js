import Icon from "@mdi/react";
import Checkbox from "@mui/material/Checkbox";
import { mdiPencil, mdiDelete } from "@mdi/js";
import IconButton from "@mui/material/IconButton";
import { StyledBox, StyledDescription } from "./styled";
import Tooltip from "@mui/material/Tooltip";

export default function TodoItem({
  id,
  description,
  completed,
  onRemoveTodo,
  onEditTodo,
  onChangeStatus,
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

  const handleChange = () => {
    onChangeStatus(id, !completed);
  };

  const descriptionTextDecoration = completed ? "line-through" : "none";

  const completedTextHelper = completed
    ? "Mark as uncompleted"
    : "Mark as completed";

  return (
    <StyledBox>
      <Tooltip title={completedTextHelper} placement="left">
        <Checkbox type="checkbox" checked={completed} onChange={handleChange} />
      </Tooltip>
      <StyledDescription
        title={description}
        sx={{ textDecoration: descriptionTextDecoration }}
      >
        {description}
      </StyledDescription>
      <Tooltip title="Edit" placement="bottom">
        <IconButton onClick={handleEdit}>
          <Icon path={mdiPencil} size={1} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete" placement="bottom">
        <IconButton color="primary" onClick={handleRemove}>
          <Icon path={mdiDelete} size={1} color="grey" />
        </IconButton>
      </Tooltip>
    </StyledBox>
  );
}
