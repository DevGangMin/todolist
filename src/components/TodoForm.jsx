import React, { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (text.trim() === "") {
      alert("할 일을 입력해주세요!");
      return;
    }

    onAddTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요."
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoForm;