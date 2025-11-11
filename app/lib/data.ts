type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

let todos: Todo[] = [
  { id: 1, title: "Learn TypeScript", completed: false },
  { id: 2, title: "Build a Todo App", completed: false },
];

export function getTodos() {
  return todos;
}

export function addTodo(title: string) {
  const newTodo: Todo = {
    id: Date.now(),
    title,
    completed: false,
  };
  todos.push(newTodo);
  return newTodo;
}

export function toggleTodo(id: number) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
}

export function deleteTodo(id: number) {
  todos = todos.filter((todo) => todo.id !== id);
}
