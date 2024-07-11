import { Button, Card, CardBody,CardFooter,Center,Divider,Flex,Heading,Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({nombre,precio,img,id}) => {
  return (
    <Card maxW='sm' border='3px' borderColor='#243F4D' boxShadow='2xl'>
      <CardBody>
        <Image
        src={img}
        alt={nombre}
        borderRadius='md'
        objectFit='cover'
        boxSize='100%'
        w={'350px'}
        h='350px'
        />

        <Stack mt='6' spacing='3'>
          <Heading size='md'>{nombre}</Heading>
          <Text color='#8727A6' fontSize='2xl'>${precio} </Text>

        </Stack>
  
      </CardBody>

      <Center height='2px' bg={'#243F4D'}> </Center>
      <Divider color={'#243F4D'} />
      <CardFooter>
        <Flex spacing='2' justifyContent={'center'} align={'center'} w={'100%'}>
          <Button
          variant='solid'
          bg={'#243F4D'}
          color={'#fff'}
          _hover={{bg:'#3E6478', color:'#fff'}}>
            
            <Link to={`/producto/${id}`}>
              Detalles
            </Link>
            
          </Button>
        </Flex>
      </CardFooter>
    </Card>
        
   
  )
}

export default Item
