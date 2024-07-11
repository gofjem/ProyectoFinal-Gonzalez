import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
  return (
    <Flex wrap={'wrap'} justify={'center'} align={'center'} mt={5} mb={5}>
      {
         products.map((prod)=>(
           <Box key={prod.id} m={2}>
               <Item {...prod}/>
           </Box>
            ))
        }

    </Flex>
        
      
   
  )
}

export default ItemList
// 1:50