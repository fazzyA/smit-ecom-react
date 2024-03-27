import React from 'react'
import Navbar from './Navbar'
import { CartContext } from '../context/Context'

const Cart = () => {
    const { state: { products, cart} } = CartContext()

  return (
    <div>
        <Navbar />
        {cart.length}
    </div>
  )
}

export default Cart