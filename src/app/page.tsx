import TodoItem from "@/components/todoItem";
import { prisma } from "@/db";
import Link from "next/link";

async function updateTodo(id: string, completed: boolean) {
  "use server"
    await prisma.todo.update({ where: { id }, data: { completed } })
  }

  async function deleteTodo(id: string) {
    "use server"
    await prisma.todo.delete({ where: { id } })
  }


export default async function Home() {
  const data = await prisma.todo.findMany();
  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-3xl font-bold underline ">To do app</h1>
        <Link
          href="/new"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {data.map((todo) => (
          <TodoItem
            key={todo.id}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            {...todo}
          />
        ))}
      </ul>
    </>
  );
}
