import React from 'react'
import Navbar from './Navbar'
import { CartContext } from '../context/AppContext'

const Home = () => {
  const { state, dispatch } = CartContext()
  return (
    <div>
      <Navbar />
        Home
    </div>
  )
}

export default Home