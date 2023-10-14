import { useState } from "react";
import Button from "@mui/material/Button";
import { StyledOutlinedInput } from "./styled";
import { useTodoContext } from "../../context/Todo";

export default function TodoCreator() {
  const { createTodo } = useTodoContext();

  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleCreate = () => {
    if (text.trim() === "") return;

    createTodo(text);
    setText("");
  };

  return (
    <StyledOutlinedInput
      fullWidth
      placeholder="Create your todo"
      endAdornment={
        <Button disableElevation variant="contained" onClick={handleCreate}>
          Create
        </Button>
      }
      value={text}
      onChange={handleChange}
    />
  );
}
