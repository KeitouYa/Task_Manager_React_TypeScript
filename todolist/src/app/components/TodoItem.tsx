"use client";
function TodoItem({ todo, toggleTodo, deleteTodo }: any) {
  return (
    <li className="flex items-center justify-between py-2">
      <span
        className={
          todo.completed ? "line-through text-gray-400" : "text-gray-800"
        }
      >
        {todo.text}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => toggleTodo(todo.id)}
          className="px-2 py-1 text-xs rounded-lg border border-gray-300 hover:bg-gray-50"
        >
          Toggle
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="px-2 py-1 text-xs rounded-lg border border-gray-300 text-red-600 hover:bg-red-50"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
