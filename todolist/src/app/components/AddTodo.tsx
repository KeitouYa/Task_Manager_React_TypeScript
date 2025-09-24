"use client";
import { useState } from "react";

interface AddTodoProps {
  addTodo: (text: string) => void;
}

function AddTodo({ addTodo }: AddTodoProps) {
  const [text, setText] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() === "") {
      return;
    }
    //不为空，需要添加
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task…"
        className="flex-1 rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900/20"
      />
      <button
        className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white
                 hover:opacity-90 disabled:opacity-50"
        disabled={!text.trim()}
      >
        Add New Task
      </button>
    </form>
  );
}

export default AddTodo;
