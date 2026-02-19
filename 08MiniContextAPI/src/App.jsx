
import './App.css'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'

function App() {
 

  return (
    <>

     <UserContextProvider>

             <h1>
                 hello Now I'm learning about context API
             </h1>
            
            <Login />
            <Profile />
      
     </UserContextProvider>
      
    </>
  )
}

export default App
