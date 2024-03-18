import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <Tabs>
            <TabList>
                <Tab><Link to={`/`}>Home</Link></Tab>
                <Tab><Link to={`/products`}>Products</Link></Tab>
                <Tab><Link to={`/signup`}>Signup</Link></Tab>
                <Tab><Link to={`/login`}>Login</Link></Tab>
            </TabList>
        </Tabs>
    )
}

export default Navbar