import { Button, Flex, Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Context from '../../context/CartContext'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import { FaDeleteLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Cart = () => {
    const {cart, removeItem, clearCart,getTotal,getQuantity}= useContext(Context)
    console.log('carrito',cart)
    
    if(cart.length === 0){
        return(
        <Flex direction={'column'} justify={'center'} align={'center'}>
            <Heading mt={5} mb={5}>Todavia no has agregado productos a tu carrito</Heading>
            <Link to='/' >Ver Productos</Link>
        </Flex>
        )
    }else{

    
  return (
    <TableContainer>
    <Table variant='striped' colorScheme='teal'>
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th>Producto</Th>
          <Th>Cantidad</Th>
          <Th isNumeric>Precio</Th>
          <Th isNumeric>Sub-Total</Th>
          <Th> </Th>
        </Tr>
      </Thead>
      <Tbody>
        {
            cart.map((prod)=>(
            <Tr key={prod.id}>
                <Td>{prod.nombre}</Td>
                <Td>{prod.quantity}</Td>
                <Td isNumeric>{prod.precio}</Td>
                <Td isNumeric>{prod.precio * prod.quantity}</Td>
                <Td>
                    <Button onClick={()=>removeItem(prod.id)}>
                        <FaDeleteLeft />
                    </Button>
                </Td>
                

            </Tr>

            ))            
        }
      </Tbody>
      <Tfoot>
        <Tr>
          <Th><Button onClick={()=>clearCart()}>Vaciar Carro</Button></Th>
          <Th><Heading>Total: {getTotal()}</Heading></Th>
          <Th><Link to='/checkout'>Finalizar compra</Link></Th>
        </Tr>
      </Tfoot>
    </Table>
  </TableContainer>
  )
}
}

export default Cart
