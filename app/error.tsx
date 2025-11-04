"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          エラーが発生しました
        </h2>
        <p className="text-gray-600 mb-4">{error.message}</p>
        <button
          // reset 関数はエラーバウンダリ内のコンテンツを再レンダリングする。Next.js が提供する関数で、ユーザーが指定する必要はない。
          onClick={reset}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          再試行
        </button>
      </div>
    </div>
  );
}
