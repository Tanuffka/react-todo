import { useState } from "react";
// import "./styles.css";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";

export default function TodoCreator({ onCreateTodo }) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleCreate = () => {
    if (text.trim() === "") return;

    onCreateTodo(text);
    setText("");
  };

  return (
    <OutlinedInput
      fullWidth
      type="text"
      id="outlined-adornment-createTodo"
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
