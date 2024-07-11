import React, { useContext, useState } from 'react'
import Context from '../../context/CartContext'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Flex,
    Center,
    Heading,
    Button
  } from '@chakra-ui/react'
import { async } from '@firebase/util'
import { addDoc, collection, getDoc, Timestamp, updateDoc,doc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const [user, setUser]= useState({
        name : '',
        email : '',
        repeateEmail: '',
        phone: ''
    })
    const [error, sertError]=useState({})
    const [loading, setLoading]=useState(false)

    const {cart,getTotal,clearCart}=useContext(Context)
    const navigate= useNavigate()
    const updateUser = (event) =>{
        setUser((user)=>({
            ...user,
            [event.target.name]: event.target.value
        }))
    }

    const validateForm = () =>{
        const errors={}
        if (!user.name){
            errors.name = "Debe agregar algun dato en el campo"
        } else if (user.name.length < 4){
            errors.name = "El valor debe tener al menos 4 caracteres"
        }
        if (!user.email){
            errors.email= "Debe ingresar algun correo"
        } else if (!/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/.test(user.email)){
            errors.email = "Debe ingresar un correo válido"
        }
        if (!user.repeateEmail){
            errors.repeateEmail = "Debe ingresar el correo anterior"
        }else if (user.repeateEmail !== user.email){
            errors.repeateEmail = "El correo no coincide"
        }
        if (!user.phone){
            errors.phone = "Debe ingresar un numero telefónico"
        }else if (user.phone.length < 5){
            errors.phone = "El número telefónico ingresado es inválido"
        }
        sertError(errors)
        return Object.keys(errors).length === 0
    }

    const getOrder = async ()=> {
        if(!validateForm()){
            return
        }

        if (cart.length === 0){
            Swal.fire({
                title: "El carro de compra esta vacio!!",
                text: "Debes agregar algún producto al carro",
                icon: "warning",
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Continuar"
              }).then((result) => {
                navigate('/')
              });
              return
        }
        const coleccion = collection(db,'orders')

        try {
            for (const item of cart){
                const docRef = doc (db, "productos", item.id)
                const productoDoc = await getDoc (docRef)
                const stockActual = productoDoc.data().stock

                if (stockActual > item.quantity){
                    await updateDoc(docRef,{
                        stock : stockActual - item.quantity
                    })
                }else{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "No hay suficiente stock del producto!",
                        confirmButtonText: "Seguir comprando"
                      });
                }

            }

            const order = {
                buyer: user,
                cart: cart,
                total: getTotal(),
                fecha: Timestamp.now()
            }
            const orderRef = await addDoc(coleccion,order)
            
            Swal.fire({
                title: "Disfruta tu compra",
                text: `Tu número de orden es: ${orderRef.id}`,
                icon: "success",
                confirmButtonText: "Seguir comprando"
              }).then((result) => {
                clearCart()
                navigate('/')
              });

        } catch (error) {
            console.log(error)
        }
    }

    console.log(user)

  return (
    <Center mt={10}>
        <Flex direction={'column'} justify={'center'} align={'center'}>
            <Heading>Datos de la Orden</Heading>
        
        
    
        <Flex w={'100%'} justify={'center'} align={'center'} mt={10}>
            <FormControl isInvalid={error}>
                <FormLabel>Nombre y Apellido</FormLabel>
                <Input 
                    type='text'
                    name='name'
                    placeholder='Patrick James'
                    onChange={updateUser} 
                />
                <FormErrorMessage>{error.name}</FormErrorMessage>
                <FormLabel>Email</FormLabel>
                <Input 
                    type='email'
                    name='email'
                    placeholder='PatrickJames@globalentt.com'
                    onChange={updateUser} 
                />
                <FormErrorMessage>{error.email}</FormErrorMessage>
                <FormLabel>Repetir Email</FormLabel>
                <Input 
                    type='email'
                    name='repeateEmail'
                    onChange={updateUser} 
                />
                <FormErrorMessage>{error.repeateEmail}</FormErrorMessage>
                <FormLabel>Telefono</FormLabel>
                <Input 
                    type='text'
                    name='phone'
                    placeholder='+569999999'
                    onChange={updateUser} 
                />
                <FormErrorMessage>{error.phone}</FormErrorMessage>
            </FormControl>
        </Flex>
        <Button mt={10} onClick={getOrder}>Finalizar Compra</Button>
        </Flex>
        
    </Center>
  )
}

export default Checkout

//24:42
