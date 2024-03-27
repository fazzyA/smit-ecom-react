import { Badge, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/Context'


const Navbar = () => {
    const { state: { products, cart} } = CartContext()

    return (
        <Tabs>
            <TabList>
                <Tab><Link to={`/`}>Home</Link></Tab>
                <Tab><Link to={`/products`}>Products</Link></Tab>
                <Tab><Link to={`/signup`}>Signup</Link></Tab>
                <Tab><Link to={`/login`}>Login</Link></Tab>
                <Tab><Link to={`/cart`}>Cart</Link>
                <Badge>{cart.length}</Badge>
                </Tab>
            </TabList>
        </Tabs>
    )
}

export default Navbar