import { Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById, getProducts } from '../../data/asyncMock'
import { DotLoader } from 'react-spinners'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getDoc,doc } from 'firebase/firestore'
import { db } from '../../config/firebase'


const ItemDetailContainer = () => {
    const [producto, setProducto]=useState({})
    const [loading, setLoading]=useState(true)
    const {productId}= useParams()
   
    const navigate = useNavigate()

    useEffect(()=>{
      
      const getData = async ()=> {
        // se obtiene la referencia de cada producto especifico
        const queryRef = doc(db,'productos',productId)
        // se obtiene el documento
        const response = await  getDoc(queryRef)
        // se crea el documento con la referencia y el nuevo id
        const newItem= {
          ... response.data(),
          id : response.id
        }
        setProducto(newItem)
        setLoading(false)
      }
      getData()

    },[])

    

  return (
    <>
      {
        loading ?
        <Flex justify={'center'} align={'center'} h={'60vh'}>
            <DotLoader color="#111312" />
        </Flex>
        :
        <ItemDetail {...producto}/>
      }
      
    </>
  )
}

export default ItemDetailContainer
