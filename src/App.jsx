import "./App.module.css";
import { useState } from "react";
import styles from "./App.module.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";


function App() {
  // State 관리 용 로직
  const [todos, setTodos] = useState([]);

  // Create
  const handleAddTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([...todos, newTodo]);
  };

  // Update
  const toggleTodo = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  // Delete
  const deleteTodo = (id) => {
    const filterTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodos);
  };

  return (
    <div className={styles.container}>
      <h1>Todo List</h1>
      {/* TodoForm */}
      <TodoForm onAddTodo={handleAddTodo} />

      {/* 할 일 목록 */}
      <TodoList
        todos={todos.filter((todo) => !todo.completed)}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />

      {/* 완료 목록 */}
      <TodoList
        todos={todos.filter((todo) => todo.completed)}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default App;
