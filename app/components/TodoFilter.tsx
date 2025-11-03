"use client"; // use client directive がないと、ランタイムでどうなるかを確認する => build error が発生する。Production ではデプロイする前に気付けるはず。

import { useState } from "react";

export default function TodoFilter() {
  const [filter, setFilter] = useState("all");

  return (
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
  );
}
