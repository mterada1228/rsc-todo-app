async function getStats() {
  const apiUrl = process.env.API_BASE_URL;
  const res = await fetch(`${apiUrl}/todos`);
  const todos = await res.json();

  return {
    total: todos.length,
    completed: todos.filter((todo: any) => todo.completed).length,
    active: todos.filter((todo: any) => !todo.completed).length,
  };
}

export default async function ServerStats() {
  const stats = await getStats();

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-blue-100 p-4 rounded">
        <p className="text-sm text-gray-600">合計TODO数</p>
        <p className="text-2xl font-bold">{stats.total}</p>
      </div>
      <div className="bg-green-100 p-4 rounded">
        <p className="text-sm text-gray-600">完了済みTODO数</p>
        <p className="text-2xl font-bold">{stats.completed}</p>
      </div>
      <div className="bg-yellow-100 p-4 rounded">
        <p className="text-sm text-gray-600">未完了TODO数</p>
        <p className="text-2xl font-bold">{stats.active}</p>
      </div>
    </div>
  );
}
