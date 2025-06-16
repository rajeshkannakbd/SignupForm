import React, { useContext } from 'react'
import { nameContext } from '../App'

const Home = () => {
  const {hname,sethname}=useContext(nameContext)
  return (
    <div>
     <h1>Home page </h1> 
      <span>   name is {hname}</span>
    </div>
  )
}

export default Home
