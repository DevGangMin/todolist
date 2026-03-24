// 할 일 항목 하나 씩
import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
const formattedDate = new Date(todo.createdAt).toLocaleString();

    return (
    <li>
      <span>{todo.completed ? <s>{todo.title}</s> : todo.title}</span>
      <span>{todo.completed ? <s>{formattedDate}</s> : formattedDate}</span>
      {/* 수정(완료) 버튼 */}
      <button onClick={() => onToggle(todo.id)}>
        {todo.completed ? "취소" : "완료"}
      </button>
      
      {/* 삭제 버튼 */}
      <button onclict={() => onDelete(todo.id)}>삭제</button>
    </li>
  );
}

export default TodoItem;
