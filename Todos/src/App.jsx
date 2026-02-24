import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './Context/index.js'
import TodoForm from './components/TodoForm.jsx';
import TodoItem from './components/TodoItem.jsx';


function App() {

   const [todos, setTodos] = useState(() => {
    
  try {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  } catch (error) {
    console.error("Failed to load todos", error);
    return [];
  }
});


     const addTodo = (todo) => {
        setTodos((prev)=>[{id:Date.now(),...todo},...prev])
     }

    const updateTodo = (id,todo) => {
        setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? {...prevTodo,...todo} : prevTodo)))
     }

      const deleteTodo = (id) => {
        setTodos((prev)=>prev.filter((prevTodo)=>(prevTodo.id !== id)))
      }

      const toggleCompleted = (id) => {
        setTodos((prev)=>prev.map((prevTodo)=>
          (prevTodo.id === id ?
         {...prevTodo,completed:!prevTodo.completed}
          : prevTodo)))
      }


     useEffect(()=>{

        localStorage.setItem("todos",JSON.stringify(todos))
         
      },[todos])




  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}>
              <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=><TodoItem key={todo.id} todo={todo}/>)}
                    </div>
                </div>
            </div>

    </TodoProvider>
  )
}

export default App
