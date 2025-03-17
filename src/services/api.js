import axios from "axios";

// const API_URL = "http://localhost:5000/api/todos"; // Sesuaikan dengan URL backend kamu
const API_URL = "https://to-do-list-api-production-1073.up.railway.app/api/todos"
// Get all todos
export const getTodos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};

// Add a new todo
export const addTodo = async (task) => {
  try {
    const response = await axios.post(API_URL, { task });
    return response.data;
  } catch (error) {
    console.error("Error adding todo:", error);
  }
};

// Update a todo
export const updateTodo = async (id, updatedTodo) => {
  try {
    const response = await axios.put(`${API_URL}/todos/${id}`, updatedTodo);
    return response.data;
  } catch (error) {
    console.error("Error updating todo:", error);
  }
};

// Delete a todo
export const deleteTodo = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};
