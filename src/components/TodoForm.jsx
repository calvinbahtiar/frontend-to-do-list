import { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return; // Jangan kirim kalau kosong
    onAddTodo(task);
    setTask(""); // Reset input setelah menambah
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        className="border p-2 rounded w-full"
        placeholder="Tambah tugas..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
        Tambah
      </button>
    </form>
  );
};

export default TodoForm;
