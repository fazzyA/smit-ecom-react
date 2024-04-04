import React from "react";
import Navbar from "./Navbar";
import { CartContext } from "../context/AppContext";
import { Button } from "@chakra-ui/react";

const Products = () => {
  const {
    state: { products, cart },
    dispatch,
  } = CartContext();
  console.log("producs", products);
  console.log("cart", cart);
  const handleCart = (product) => {
    const newObj = {...product, qty: 0}
    dispatch({
        type: "ADD_ITEM_TO_CART",
        payload: newObj
    })
  };
  const handleRemoveCart = (product) => {
    dispatch({
      type: "REMOVE_ITEM_CART",
      payload: product
    })
  }

  return (
    <>
      <Navbar />
      {products.map((item) => (
        <div>
          {item.title}
          <Button onClick={() => handleCart(item)}>Add to Cart</Button>
          <Button onClick={() => handleRemoveCart(item)}>Remove item from Cart</Button>
        </div>
      ))}
    </>
  );
};

export default Products;
