
import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice.js'

const Todos = () => {

    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch()
          
    // ⭐ ADD HERE
    console.log("TODOS =>", todos)


  return (
    <>
   <div className="text-2xl font-semibold text-white mb-4">
  Todos
</div>

<ul className="list-none">
  {todos.map((todo) => (
    <li
      key={todo.id}
      className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-3 rounded-lg shadow-md"
    >
      <span className="text-white text-base">
        {todo.title}
      </span>

      <button

        onClick={() => dispatch(removeTodo(todo.id))}
        className="bg-red-500 hover:bg-red-600 text-black px-4 py-1 rounded-md transition duration-200"
      >
        ❌
      </button>
    </li>
  ))}
</ul>
      

    </>
  )
}

export default Todos
