
import { useState ,useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

   const [length,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [characterAllowed,setCharacterAllowed]=useState(false)
    const [password,setPassword]=useState("")


      // useRef is used to store the reference of the function and it will not change on every render

      const passwordRef=useRef(null)


    const generatePassword=useCallback(()=>{
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        
        if(numberAllowed)  str+="0123456789"
        
        if(characterAllowed) str+="!@#$%^&*()_+"
    
        for(let i=1;i<=length;i++){
           let charIndex=Math.floor(Math.random()*str.length)
            pass+=str.charAt(charIndex)
          
          }
    
          setPassword(pass)
  
    }, [length,numberAllowed,characterAllowed,setPassword])
    
  
      
      const copyPasswordToClipboard=useCallback(()=>{
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 101); // For mobile devices 


            window.navigator.clipboard.writeText(password)
      },[password])
      

           useEffect(()=>{
      //  generatePassword()
      },[ length,numberAllowed,characterAllowed,generatePassword])


  


  return (
    <>
   <div className="min-h-screen flex justify-center items-center bg-black">
  <div className="w-full max-w-md flex flex-col gap-5 rounded-lg px-4 bg-gray-900">
    <h1 className="text-white text-center my-3 text-xl font-semibold">
      Password Generator
    </h1>

    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
        type="text"
        value={password}
        placeholder="Password"
        readOnly
        ref={passwordRef}
        className="w-full px-3 py-2 outline-none bg-white text-black"
      />
      <button  onClick={copyPasswordToClipboard}
       className='outline-none bg-blue-700 text white px-3 py-0.5 shrink-0'>
        copy
      </button>
    </div>
  
   <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
              <input type="range"
              min={6}
              max={80}
              value={length}
              className='cursor-pointer  text-blue-500'
              onChange={(e)=>{setLength(e.target.value)}}
              />     <label htmlFor="length">Length: {length}</label>
        </div>

           <div>
              <input type="checkbox"
               id='number'
               checked={numberAllowed}
               onChange={()=>{setNumberAllowed((prev)=>!prev)}}
                />
              <label htmlFor="number" className="ml-2 text-sm text-blue-500">Numbers</label>
           </div>

             <div className='flex items-center' >
              <input type="checkbox"
               id='character'
               checked={characterAllowed}
               onChange={()=>{setCharacterAllowed((prev)=>!prev)}}
                />
              <label htmlFor="character" className="ml-2 text-sm text-blue-500">Characters</label>
             </div>

   </div>


  </div>
</div>

    </>
  )
}

export default App
