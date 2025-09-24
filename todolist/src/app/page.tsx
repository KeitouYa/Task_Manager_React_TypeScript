"use client";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import { Todo } from "@/app/types";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false, //默认没完成
    };
    //set data into Todos
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //toggle status
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  //设置函数修改todos
  const getFilterTodos = () => {
    //判断filter类型
    switch (filter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "active":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-xl p-6">
        <h1 className="title">To-Do List</h1>

        <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
          <AddTodo addTodo={addTodo} />
          <TodoList
            todos={getFilterTodos()}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
          <TodoFilter setFilter={setFilter} />
        </div>
      </div>
    </div>
  );
}
