import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p style={{ color: "gray" }}>목록이 비어 있습니다.</p>;
  }

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;