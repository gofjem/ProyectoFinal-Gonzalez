import React, { useEffect, useState } from 'react'
import { Box, Button, ButtonGroup, Flex } from '@chakra-ui/react'


const ItemCount = ({stock,valorInicial,onAdd, maxAvailable}) => {
    const [count,setCount]= useState(valorInicial)
    console.log(count);
    

    const incrementar=()=>{
       count < maxAvailable && setCount(count + 1)
    }

    const decrementar=()=>{
       count > valorInicial && setCount(count - 1)
    }
  return (
    <Flex direction={'column'} align={'center'} justify={'center'} w={'100%'}>
      <Box className='counterContainer'>
        <Button 
        colorScheme='blackAlpha' 
        onClick={decrementar} 
        m={3}
        bg={'#243F4D'}
        color={'#fff'}
        _hover={{bg:'#3E6478', color:'#fff'}}
        className='btnCounter'>
          -
        </Button>
        {count}
        <Button 
        colorScheme='blackAlpha'
        onClick={incrementar} 
        m={3}
        bg={'#243F4D'}
        color={'#fff'}
        _hover={{bg:'#3E6478', color:'#fff'}}
        className='btnCounter'>
          +
        </Button>
      </Box>
        <Button 
        bg={'#243F4D'}
        color={'#fff'}
        w={'100%'}
        h={'5vh'}
        borderRadius={0}
        _hover={{bg:'#3E6478', color: '#fff'}}
        colorScheme='purple' 
        onClick={()=>onAdd(count)}
        >
          Agregar al Carro
        </Button>
      
    </Flex>
  )
}

export default ItemCount
