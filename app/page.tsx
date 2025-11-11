import { Suspense } from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Card from "./components/Card";
import ServerStats from "./components/ServerStats";
import SlowComponent from "./components/SlowComponent";
import { ThemeToggle } from "./components/ThemeToggle";
import { ErrorTrigger } from "./components/ErrorTrigger";
import { getTodos } from "./lib/data";

function LoadingSkeleton() {
  return (
    <div className="bg-gray-100 p-4 rounded animate-pulse">
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-bold mb-4">RSC Todo App</h1>
        <TodoForm />

        <Suspense fallback={<LoadingSkeleton />}>
          <Card title="TODOリスト">
            <ServerStats />
          </Card>
        </Suspense>

        <Suspense fallback={<LoadingSkeleton />}>
          <TodoList initialTodos={todos} />
        </Suspense>

        <Suspense fallback={<LoadingSkeleton />}>
          <SlowComponent />
        </Suspense>

        <ErrorTrigger />

        <ThemeToggle />
      </main>
    </div>
  );
}
