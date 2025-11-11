"use client"; // use client directive がないと、ランタイムでどうなるかを確認する => build error が発生する。Production ではデプロイする前に気付けるはず。

import { useState } from "react";
import TodoItem from "./TodoItem";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  initialTodos: Todo[];
};

export default function TodoList({ initialTodos }: Props) {
  // TODO: Client Components での User Event をトリガーに Server Components で再フェッチする方法は？
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded ${
            filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          すべて
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`px-4 py-2 rounded ${
            filter === "active" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          未完了
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-4 py-2 rounded ${
            filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          完了
        </button>
        <p className="ml-4 py-2">選択中: {filter}</p>
      </div>

      <ul className="space-y-2">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>
  );
}
