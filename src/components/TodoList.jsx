// 할일 목록 (여러 TodoItem)
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onDelete }) {
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
