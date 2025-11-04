import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Card from "./components/Card";
import ServerStats from "./components/ServerStats";
import { ThemeToggle } from "./components/ThemeToggle";

async function getTodos() {
  const apiUrl = process.env.API_BASE_URL;

  const res = await fetch(`${apiUrl}/todos?_limit=5`);

  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }

  return res.json();
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-bold mb-4">RSC Todo App</h1>
        <TodoForm />

        <Card title="TODOリスト">
          <ServerStats />
        </Card>

        <TodoList initialTodos={todos} />

        <ThemeToggle />
      </main>
    </div>
  );
}
