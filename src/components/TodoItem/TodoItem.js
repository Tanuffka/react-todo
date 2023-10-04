import Icon from "@mdi/react";
import Checkbox from "@mui/material/Checkbox";
import { mdiPencil, mdiDelete } from "@mdi/js";
import IconButton from "@mui/material/IconButton";
import { StyledBox, StyledDescription } from "./styled";
import Tooltip from "@mui/material/Tooltip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function TodoItem({
  id,
  description,
  completed,
  onRemoveTodo,
  onEditTodo,
  onChangeStatus,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  const handleRemove = () => {
    onRemoveTodo(id);
  };

  const handleSave = () => {
    if (!newDescription) {
      return;
    }

    onEditTodo(id, newDescription);
    setOpen(false);
  };

  const handleStatusChange = () => {
    onChangeStatus(id, !completed);
  };

  const handleDescriptionChange = (event) => {
    setNewDescription(event.target.value);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleEditOpen = () => {
    setOpen(true);
  };

  const handleEditClose = () => {
    setOpen(false);
    setNewDescription(description);
  };

  const descriptionTextDecoration = completed ? "line-through" : "none";

  const completedTextHelper = completed
    ? "Mark as uncompleted"
    : "Mark as completed";

  return (
    <StyledBox onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Tooltip title={completedTextHelper} placement="left">
        <Checkbox
          type="checkbox"
          checked={completed}
          onChange={handleStatusChange}
        />
      </Tooltip>
      <StyledDescription sx={{ textDecoration: descriptionTextDecoration }}>
        {description}
      </StyledDescription>
      <Dialog fullWidth open={open} onClose={handleEditClose}>
        <DialogTitle>Edit Todo</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            autoFocus
            value={newDescription}
            variant="outlined"
            onChange={handleDescriptionChange}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleEditClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
      {isHovered && (
        <>
          <Tooltip title="Edit" placement="bottom">
            <IconButton onClick={handleEditOpen}>
              <Icon path={mdiPencil} size={1} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete" placement="bottom">
            <IconButton color="primary" onClick={handleRemove}>
              <Icon path={mdiDelete} size={1} color="grey" />
            </IconButton>
          </Tooltip>
        </>
      )}
    </StyledBox>
  );
}
