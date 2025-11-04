async function SlowFetch() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  return res.json();
}

export default async function SlowComponent() {
  const users = await SlowFetch();

  return (
    <div className="bg-purple-100 p-4 rounded">
      <h3 className="font-bold mb-2">ユーザー一覧</h3>
      <ul>
        {users.slice(0, 3).map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
