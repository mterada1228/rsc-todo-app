"use client";

import { useState } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Card({ title, children }: Props) {
  const [isExpanded, setExpanded] = useState(true);

  return (
    <div className="border rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <button
          onClick={() => setExpanded(!isExpanded)}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          {isExpanded ? "閉じる" : "開く"}
        </button>
      </div>
      {isExpanded && <div>{children}</div>}
    </div>
  );
}
