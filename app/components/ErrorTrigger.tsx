"use client";

import { useState } from "react";

export function ErrorTrigger() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error("これは意図的に発生させたエラーです");
  }

  return (
    <div className="mt-8 p-4 border border-red-300 rounded">
      <h3 className="text-lg font-semibold mb-2">エラーデモ</h3>
      <p className="text-sm text-gray-600 mb-4">
        このボタンをクリックすると、意図的にエラーが発生し、Error
        コンポーネントが表示されます。
      </p>
      <button
        onClick={() => setShouldError(true)}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        エラーを発生させる
      </button>
    </div>
  );
}
