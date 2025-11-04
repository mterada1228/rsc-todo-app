"use client"; // TODO: use client directive がないと、ランタイムでどうなるかを確認する

import { useState } from "react";

export default function TodoForm() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="新しいTODOを入力"
          className="flex-1 px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          追加
        </button>
      </div>
    </form>
  );
}
