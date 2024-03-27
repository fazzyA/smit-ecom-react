import { faker } from '@faker-js/faker';
import React, { createContext, useContext, useReducer } from 'react'
import { CartReducer } from './Reducer';

const Cart = createContext();


const ContextProvider = ({ children }) => {
    const products = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url(),
        description: faker.commerce.productDescription()
    }))
    // console.log("🚀 ~ products ~ products:", products)
    const [state, dispatch] = useReducer(CartReducer, {
        products,
        cart: []
    })
  return (
   <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>
  )
}

export default ContextProvider

export const CartContext = () => {
    return useContext(Cart)
}