import { useState } from "react";

import "./styles.css";

export default function TodoCreator({ onCreateTodo, onEditTodo}) {
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
    <div className="todocreator">
      <input 
        type="text"
        placeholder="Create your todo..."
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
  
  }
