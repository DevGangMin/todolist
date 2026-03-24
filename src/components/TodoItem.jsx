import React, { useState } from "react";

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const formattedDate = todo.createdAt
    ? new Date(todo.createdAt).toLocaleString()
    : "날짜 정보 없음";

  const handleSave = () => {
    if (editTitle.trim() === "") {
      alert("내용을 입력해주세요!");
      return;
    }
    onEdit(todo.id, editTitle);
    setIsEditing(false);
  };

  const handleEditMode = () => {
    setIsEditing(true);
    setEditTitle(todo.title);
  };

  if (isEditing) {
    return (
      <li>
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          autoFocus
        />
        <button onClick={handleSave}>저장</button>
        <button onClick={() => setIsEditing(false)}>취소</button>
      </li>
    );
  }

  return (
    <li>
      <span>{todo.completed ? <s>{todo.title}</s> : todo.title}</span>
      <span style={{ marginLeft: "10px", fontSize: "0.8rem", color: "gray" }}>
        {todo.completed ? <s>({formattedDate})</s> : `(${formattedDate})`}
      </span>

      <button onClick={() => onToggle(todo.id)}>
        {todo.completed ? "취소" : "완료"}
      </button>
      
      {!todo.completed && (
        <button onClick={handleEditMode}>수정</button>
      )}
      
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </li>
  );
}

export default TodoItem;