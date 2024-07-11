import { Box, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';
import Context from '../../context/CartContext';


const CartWidget = () => {
  const {getQuantity}=useContext(Context)
  return (
    <Flex justify={'center'} align={'center'} m={3} color='white'>
      <Link to={'/cart'}><TiShoppingCart color='White' size={30}/></Link>
      <span>{getQuantity() > 0 && getQuantity()}</span>

    </Flex>
  )
}

export default CartWidget
