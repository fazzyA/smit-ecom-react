<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/Signup';
import Home from './components/Home';
import Products2 from './components/Products2';
function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/signup",
    element: <Signup />

  },
  {
    path: "/login",
    element: ""
  },
  {
    path: "/products",
    element: <Products2 />
  }

])
=======
import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Products from "./components/Products";
import { AppContext } from "./context/AppContext";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: "",
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);
>>>>>>> 872e4d5f0a6c6c27a0311aa19c7102cab46e6086

  return (
    <ChakraProvider>
      <AppContext>
      <div className="App">
        <RouterProvider router={router} />
      </div>
      </AppContext>
    </ChakraProvider>
  );
}

export default App;
