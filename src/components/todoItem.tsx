import React from 'react'
type TodoItemProps = {
    title: string;
    completed: boolean;
    id: string
}
const todoItem = ({title,id}:TodoItemProps) => {
  return <li className='flex gap-2 items-center'>
<input id={id} type="checkbox" className='cursor-pointer peer-[]:' />
<label htmlFor={id} className='cursor-pointer peer-checked:line-through peer-checked:text-slate-500'>{title}</label>
  </li>
}

export default todoItem
