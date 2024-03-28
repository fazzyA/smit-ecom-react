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
