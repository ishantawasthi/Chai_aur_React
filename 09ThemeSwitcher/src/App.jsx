
import './App.css'
import { ThemeProvider } from './contexts/Theme.js'
import { useEffect, useState } from 'react'
import ThemeBtn from './components/ThemeBtn.jsx'
import Card from './components/Card.jsx'


function App() {

 const [themeMode, setThemeMode] = useState("light")


  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }
   
  //   Actually change in theme 

  
   useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
   },[themeMode])

 


  return (
    
    <>
    
     <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>

     <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                         {/*   themebtn    */}
                         <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                          {/*  Card   */}
                          <Card />
                    </div>
                </div>
      </div>

     </ThemeProvider>
    
      

    
    </>

  )
}

export default App
