import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/Signup';
import Home from './components/Home';
import Cart from './components/Cart';
import ContextProvider from './context/Context';
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
      element: ""
    },
    {
      path: "/cart",
      element: <Cart />
    }


  ])

  return (

    <ChakraProvider>
      <ContextProvider>
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </ContextProvider>
    </ChakraProvider>
  );
}

export default App;
