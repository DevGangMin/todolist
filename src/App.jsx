import "./App.module.css";
import { useState, useEffect } from "react";
import styles from "./App.module.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const URL = "http://localhost:4000/todos";
  // Read
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("http://localhost:4000/todos");
      const data = await response.json();
      setTodos(data);
    };

    fetchTodos();
  }, []);

  // Create
  const handleAddTodo = async (title) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
      createdAt: new Date().toISOString("KO-KR"),
    };

    const response = await fetch("http://localhost:4000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });

    const savedTodo = await response.json();
    setTodos([...todos, savedTodo]);
  };

  // Update (toggle)
  const toggleTodo = async (id) => {
    const targetTodo = todos.find((todo) => todo.id === id);

    await fetch(`${URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !targetTodo.completed }),
    });

    const updateTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updateTodos);
  };
  // Update (edit)
  const handleEditTodo = async (id, newTitle) => {
    await fetch(`${URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle }),
    });

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo,
      ),
    );
  };

  // Delete
  const deleteTodo = async (id) => {
    await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });

    const filterTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodos);
  };

  return (
    <div className={styles.container}>
      <h1>Todo List</h1>
      {/* TodoForm */}
      <TodoForm onAddTodo={handleAddTodo} />
      <br />
      {/* 할 일 목록 */}
      <h2>할 일 목록</h2>
      <TodoList
        todos={todos.filter((todo) => !todo.completed)}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={handleEditTodo}
      />
      <br />
      <hr />
      <br />

      {/* 완료 목록 */}
      <h2>완료 목록</h2>
      <TodoList
        todos={todos.filter((todo) => todo.completed)}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={handleEditTodo}
      />
    </div>
  );
}

export default App;
