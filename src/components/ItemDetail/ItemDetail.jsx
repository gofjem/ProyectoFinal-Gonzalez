import React, { useContext, useState } from 'react'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Flex, Heading, Image,Text } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({img,nombre,precio,stock,descripcion,id,categoria}) => {
  const [cantidad,setCantidad]=useState(0)
  const {addItem}=useContext(Context)

  const onAdd=(quantity)=>{
    const item={
      id,
      nombre,
      precio
    }
      addItem(item,quantity)
      toast(`Agregaste ${quantity} Producto(s) al carro`)
      setCantidad(quantity)
    }

  return (
    <Center>

    
    <Card maxW='md' mt={10} mb={5}>
    <CardHeader>
       <Image 
          objectFit='cover'
          src={img}
          boxSize='100%'
          w={'300px'}
          h='300px'
          float={'left'}
          />

    </CardHeader>
    <CardBody>
        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap' >
          <Box w={'100%'}>
            <Text  fontSize='lg' textAlign={'center'} m={3} padding={5}>Categoria:{categoria}</Text>
            <Heading size='md' textAlign={'center'}>{nombre}</Heading>
          </Box>
          <Text textAlign={'center'} m={3}>Descripción: {descripcion}</Text>
        </Flex>
        <Text fontWeight='bold' fontSize='3xl' mt={3} textAlign={'center'}>$ {precio}</Text>
        <Text fontSize='xl' textAlign={'center'} mt={1}  >Stock Disponible: {stock}</Text>
    </CardBody>

    <CardFooter w={'100%'} p={0}>

      {
        cantidad > 0 ?
        <Flex justify={'space-between'} align={'center'} w={'100%'}>
          <Button 
            bg={'#f58c82'}
            color={'#243F4D'}
            w={'100%'}
            h={'5vh'}
            m={11}
            borderRadius={0}
            _hover={{bg:'#ECCDB7', color: '#243F4D'}}>
               <Link to='/cart'> Ir al carro</Link>

          </Button>
          <Button
            bg={'#f58c82'}
            color={'#243F4D'}
            w={'100%'}
            h={'5vh'}
            m={11}
            borderRadius={0}
            _hover={{bg:'#ECCDB7', color: '#243F4D'}}>
               <Link to='/'>Seguir Comprando</Link>
          </Button>

        </Flex>
          :
            <ItemCount stock={stock} valorInicial={1} onAdd={onAdd}/>
        }
    </CardFooter>
    <ToastContainer/>  
    </Card>
    </Center>
  )
}

export default ItemDetail
//27:11