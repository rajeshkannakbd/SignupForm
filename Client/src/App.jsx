import { createContext, use, useState } from 'react'
import './App.css'

import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Signup from './Components/Signup'
import Login from './Components/Login'
import Home from './Components/Home'
import ProtectedRoute from './ProductedRoute'
export const nameContext = createContext("")

function App() {
  const[hname,setHname] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
    <nameContext.Provider value={{hname,setHname,isAuthenticated, setIsAuthenticated}}>
      <Router>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
      </nameContext.Provider>
      {/* <div className=' bg-gray-500 w-dvw h-screen flex items-center content-center justify-center'>
          <Login />
          <Signup />
      </div> */}
      
    </>
  )
}

export default App
