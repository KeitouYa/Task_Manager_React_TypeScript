"use client";
import { Todo } from "@/app/types";
import TodoItem from "./TodoItem";
interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}
function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  return (
    <ul className="divide-y divide-gray-100">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
