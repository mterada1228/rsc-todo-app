"use client";

import { useActionState } from "react";
import { createTodoAction } from "../actions/todo-actions";

export default function TodoForm() {
  const [state, formAction] = useActionState(createTodoAction, {
    success: false,
  });

  return (
    <form action={formAction} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          name="title"
          placeholder="新しいTODOを入力"
          className="flex-1 px-4 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          追加
        </button>
      </div>

      {state?.errorMessage && (
        <p className="mt-2 text-red-500">{state.errorMessage}</p>
      )}
    </form>
  );
}
