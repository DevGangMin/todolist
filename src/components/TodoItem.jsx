import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
  const formattedDate = todo.createdAt 
    ? new Date(todo.createdAt).toLocaleString() 
    : "날짜 정보 없음";

  return (
    <li>
      <span>
        {todo.completed ? <s>{todo.title}</s> : todo.title}
      </span>
      <span style={{ marginLeft: "10px", fontSize: "0.8rem", color: "gray" }}>
        {todo.completed ? <s>({formattedDate})</s> : `(${formattedDate})`}
      </span>

      <button onClick={() => onToggle(todo.id)}>
        {todo.completed ? "취소" : "완료"}
      </button>
      
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </li>
  );
}

export default TodoItem;