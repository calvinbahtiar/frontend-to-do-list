import TodoItem from "./TodoItem";

const TodoList = ({ todos, onUpdateTodo, onDeleteTodo }) => {
  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} onUpdateTodo={onUpdateTodo} onDeleteTodo={onDeleteTodo} />
        ))
      ) : (
        <p className="text-center text-gray-500">Belum ada tugas</p>
      )}
    </div>
  );
};

export default TodoList;
