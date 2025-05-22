import { useState } from 'react'
import './App.css'

import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Signup from './Components/Signup'
import Login from './Components/Login'
import Home from './Components/Home'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
      {/* <div className=' bg-gray-500 w-dvw h-screen flex items-center content-center justify-center'>
          <Login />
          <Signup />
      </div> */}
      
    </>
  )
}

export default App
