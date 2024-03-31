import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Grid, GridItem, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const Products2 = () => {
  const [products, setProducts] = useState([])
  let len = products.length/4
  useEffect(() => {
    fetch("http://localhost:8000/products")
    .then(data => data.json())
    .then(result => {
      console.log("result.....", result)
      setProducts(result)
      len = products.length/4

    })

  }, [])


  return (
    <Grid templateColumns='repeat(4, 1fr)' templateRows='repeat(5, 1fr)' gap={6}>
      {products.map((product) => (
        <GridItem w='100%' h='50' bg='blue.500'>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src={product.image}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{product.title}</Heading>
                <Text>
                {product.description}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  {product.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

        </GridItem>
      ))}

    </Grid>
  )
}

export default Products2