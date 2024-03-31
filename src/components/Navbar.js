import {
  Badge,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/AppContext";

const Navbar = () => {
  const {
    state: { products, cart },
    dispatch,
  } = CartContext();
  return (
    <Tabs>
      <TabList>
        <Tab>
          <Link to={`/`}>Home</Link>
        </Tab>
        <Tab>
          <Link to={`/products`}>Products</Link>
        </Tab>
        <Tab>
          <Link to={`/signup`}>Signup</Link>
        </Tab>
        <Tab>
          <Link to={`/login`}>Login</Link>
        </Tab>
        <Tab>
          <Link to={`/cart`}>
            <FaShoppingCart />
            <Badge>{cart.length}</Badge>{" "}
          </Link>
        </Tab>
      </TabList>
    </Tabs>
  );
};

export default Navbar;
