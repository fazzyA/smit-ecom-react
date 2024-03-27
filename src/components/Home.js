import React from 'react'
import Navbar from './Navbar'
import { CartContext } from '../context/Context'
import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Home = () => {
  const { state: { products, cart}, dispatch } = CartContext()
  console.log("🚀 ~ Home ~ cart:", cart)
  console.log("🚀 ~ Home ~ state:", products)
  const handleCart = (prod) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: prod
    })


  }
  return (
    <div>
      <Navbar />
      <SimpleGrid columns={4} spacing={2}>
      {products.slice(0, 6).map((item) => (
        <Card maxW='sm'>
          <CardBody>
            <Image
              src={item.image}
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{item.title}</Heading>
              <Text>
              {item.description}
              </Text>
              <Text color='blue.600' fontSize='2xl'>
              {item.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                Buy now
              </Button>
              <Button variant='ghost' colorScheme='blue' onClick={() => handleCart(item)}>
                Add to cart
              </Button>
              <Button variant='ghost' colorScheme='blue'>
                <Link to={`/product/${item.id}`}>View</Link>
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>))
        }
        </SimpleGrid>
    </div>
  )
}

export default Home