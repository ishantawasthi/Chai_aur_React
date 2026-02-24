
import './App.css'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos.jsx'

function App() {
 

  return (
    <>

      <h1 className="text-2xl text-gray-700 mb-4">Hello learning Redux Toolkit </h1>
      <AddTodo />
      <Todos/>
    </>
  )
}

export default App
