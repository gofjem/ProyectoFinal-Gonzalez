import React, { useEffect, useState } from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import { getProducts, getProductsByCategory } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import {db} from '../../config/firebase'
import { collection, doc, getDocs, query,where } from 'firebase/firestore'


const ItemListContainer = ({title}) => {
  const [products, setProducts]=useState([])
  const {categoryId}=useParams()
  const [loading, setLoading]=useState(true)
  //console.log(db)

  console.log(categoryId)
  
  useEffect(()=>{
    setLoading(true)
    const getData = async () =>{
      //se obtiene la referencia a la colección
      const coleccion = collection(db, 'productos')
      // se crea una referencia a la consulta
      const queryRef = !categoryId ?
      coleccion
      :
      // se pasa la coleccion y los datos a filtrar a traves de query
      query(coleccion,where('categoria','==',categoryId))
      // se obtienen los documentos
      const response= await getDocs(queryRef)
      
      // se mapean los documentos y se creo un nuevo objeto con los datos del producto y se setea el id 
      const productos= response.docs.map((doc)=>{
        const newItem = {
          ... doc.data(),
          id : doc.id
        }
        return newItem
      })
      setProducts(productos)
      setLoading(false)
    }
    getData()
    // const dataProductos= categoryId ? getProductsByCategory(categoryId): getProducts()
    // dataProductos
    //   .then((data)=>setProducts(data))
    //   .catch((error)=>console.log(error))
    //   .finally(()=>setLoding(false))
  },[categoryId])
 

  

  return (
    <Flex direction={'column'} justify={'center'} padding={3} align={'center'}>
      <Heading color={'#171718'} mt={10}>{title}</Heading>
      {
        loading ?
        
        <Flex justify={'center'} align={'center'} h={'60vh'}>

          <DotLoader color="#111312" />

        </Flex>
        :
        <ItemList products={products}/>
      }
      
      
    </Flex>
  )
}

export default ItemListContainer
