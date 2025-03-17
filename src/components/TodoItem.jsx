import { useState } from "react";

const TodoItem = ({ todo, onUpdateTodo, onDeleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdateTodo(todo._id, { ...todo, task: newTask });
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2">
      {isEditing ? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-1 w-full"
        />
      ) : (
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.task}
        </span>
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <button onClick={handleSave} className="bg-green-500 text-white px-2 py-1 rounded cursor-pointer hover:bg-green-600">
            Simpan
          </button>
        ) : (
          <button onClick={handleEdit} className="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer hover:bg-blue-600">
            Edit
          </button>
        )}

        <button
          onClick={() => onUpdateTodo(todo._id, { ...todo, completed: !todo.completed })}
          className="bg-yellow-500 text-white px-2 py-1 rounded cursor-pointer hover:bg-yellow-400"
        >
          {todo.completed ? "Undo" : "Selesai"}
        </button>

        <button
            onClick={() => onDeleteTodo(todo._id)}
            className={`bg-red-500 text-white px-2 py-1 rounded ${
            !todo.completed ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-red-400"
            }`}
            disabled={!todo.completed} // Nonaktifkan jika belum selesai
            >
         Hapus
        </button>

      </div>
    </div>
  );
};

export default TodoItem;
