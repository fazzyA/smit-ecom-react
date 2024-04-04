//Make cart page.
//show products copy from store api
//conetxt
//reducer
//call cart and products on home page n display
//call cart in header and display count
//
import React from "react";
import Navbar from "./Navbar";
import { CartContext } from "../context/AppContext";

const Cart = () => {
  const [cart, ] = CartContext()
  return (
    <>
    <Navbar />
    cart
  </>

  );
};

export default Cart;
