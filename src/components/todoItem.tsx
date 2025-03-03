"use client";
type TodoItemProps = {
  title: string;
  completed: boolean;
  id: string;
  updateTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
};
const todoItem = ({ title, completed, id, updateTodo, deleteTodo }: TodoItemProps) => {
  return (
    <li className="flex gap-2 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer-[]:"
        defaultChecked={completed}
        onChange={(e) => updateTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
      <button
        onClick={() => deleteTodo(id)}
        className="text-red-300 hover:text-red-500"
      >
        Delete
      </button>
    </li>
  );
};

export default todoItem;
