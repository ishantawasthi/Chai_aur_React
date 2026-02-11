
import './App.css'
import { useState } from 'react'
function App() {
  
  const [Color , setColor] = useState("violet")

  return (
      <div className='w-full h-screen duration-200' 
            style={{backgroundColor: Color}} >   {/* color passed as a props  */} 



            <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ' >
                   <div className='flex flex-wrap justify-center gap-3 shadow-2xs bg-white px-3 py-2 rounded-full text-white shadow-lg' >
                                       <button  onClick={()=> setColor("red")}
                                        className='outline-none px-4'
                                         style={{backgroundColor: "red"}} >   {/* color passed as a props  */} 
                                        Red
                                       </button>

                                        <button  onClick={()=> setColor("green")}
                                        className='outline-none px-4'
                                         style={{backgroundColor: "green"}}>  {/* color passed as a props  */} 
                                        Green
                                       </button>

                                        <button  onClick={()=> setColor("blue")}
                                        className='outline-none px-4'
                                         style={{backgroundColor: "blue"}}>    {/* color passed as a props  */} 
                                        blue
                                       </button>

                                   
                   </div>
            </div>
      </div>
  )
}

export default App
