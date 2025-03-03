import Link from "next/link";

export default function About() {
  return <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-3xl font-bold underline ">New</h1>
      </header>
      <form className="flex flex-col gap-2">
        <input type="text" name="title" className="border border-slate-300" />
        <div className="flex gap-2 justify-end">
          <Link href=".." className="border border-slate-300 px-2 py-1 rounded-b-lg">Cancel</Link>
          <button type="submit" className="border border-slate-300 px-2 py-1 rounded-b-lg">Save</button>
         </div>
      </form>
    </>
  
}
