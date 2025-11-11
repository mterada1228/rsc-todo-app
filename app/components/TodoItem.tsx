"use client";

import { toggleTodoAction, deleteTodoAction } from "../actions/todo-actions";

type Props = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TodoItem({ id, title, completed }: Props) {
  return (
    <li className="flex items-center gap-2 p-3 bg-gray-100 rounded">
      {/* TODO: bind を使うのは hack 的？他に良い方法は？ */}
      <form action={toggleTodoAction.bind(null, id)}>
        <button
          type="submit"
          className="w-5 h-5 border-2 rounded flex items-vcenter justify-center"
        >
          {completed && "✓"}
        </button>
      </form>

      <span className={`flex-1 ${completed ? "line-through" : ""}`}>
        {title}
      </span>

      {/* TODO: bind を使うのは hack 的？他に良い方法は？ */}
      <form action={deleteTodoAction.bind(null, id)}>
        <button
          type="submit"
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          削除
        </button>
      </form>
    </li>
  );
}
