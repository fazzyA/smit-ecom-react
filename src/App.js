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

  return (
    
    <ChakraProvider>
    <div className="App">
      <RouterProvider router={router} />
    </div>
    </ChakraProvider>
  );
}

export default App;
