import { useEffect, useState } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../services/api";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Home = () => {
  const [todos, setTodos] = useState([]);

  // Fetch todos saat komponen dimuat
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  const handleAddTodo = async (task) => {
    const newTodo = await addTodo(task);
    if (newTodo) {
      setTodos([...todos, newTodo]);
    }
  };

  const handleUpdateTodo = async (id, updatedTodo) => {
  try {
    await updateTodo(id, updatedTodo);
    setTodos((prevTodos) => prevTodos.map((todo) => (todo._id === id ? updatedTodo : todo)));
  } catch (error) {
    console.error("Error updating todo:", error);
  }
};


  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4 pt-4">To-Do List API Guide</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onUpdateTodo={handleUpdateTodo} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default Home;
