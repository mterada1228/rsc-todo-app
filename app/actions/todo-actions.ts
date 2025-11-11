// server actions として呼び出せるようにするには use server が必要
"use server";

import { revalidatePath } from "next/cache";
import { addTodo, deleteTodo, toggleTodo } from "../lib/data";

type ResponseStatus = {
  success: boolean;
  errorMessage?: string;
};

export async function createTodoAction(
  _previousState: ResponseStatus,
  formData: FormData
) {
  const title = formData.get("title") as string;

  if (!title || title.trim().length === 0) {
    throw new Error("Title is required");
  }

  console.log("Creating todo with title:", title);

  addTodo(title);

  revalidatePath("/");

  if (title === "error") {
    return { success: false, errorMessage: "Simulated error occurred" };
  } else {
    return { success: true };
  }
}

export async function toggleTodoAction(id: number) {
  toggleTodo(id);

  console.log("Toggled todo with id:", id);

  revalidatePath("/");
}

export async function deleteTodoAction(id: number) {
  deleteTodo(id);

  console.log("Deleted todo with id:", id);

  revalidatePath("/");
}
