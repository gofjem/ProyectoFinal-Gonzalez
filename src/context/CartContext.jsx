import React, { createContext, useState } from 'react'

    const Context=createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart]=useState([])
    const addItem=(productToAdd,quantity)=>{
        const newItem={
            ...productToAdd,
            quantity
        }
        if (isInCart(newItem.id)){
            const updateCart = cart.map((prod)=>{
                if(prod.id === newItem.id){
                    return {...prod, quantity: prod.quantity + newItem.quantity}
                }
                return prod
            })
            setCart(updateCart)
        }else{
            setCart([...cart,newItem])
        }

        

    }

    const isInCart=(id)=>{
        return cart.some((prop)=> {prop.id === id})

    }

    const removeItem = (id) =>{
        const updateCart= cart.filter((prod)=> prod.id !== id)

        setCart([...updateCart])

    }

    const clearCart = ()=>{
       setCart([])

    }

    const getTotal=()=>{
       return cart.reduce((acc,item)=> acc + item.precio * item.quantity,0)
    }

    const getQuantity=()=>{
        return cart.reduce((acc,item)=> acc + item.quantity, 0)
    }

    console.log(cart)
  return (
    <Context.Provider
        value={{
            cart,
            setCart,
            addItem,
            removeItem,
            clearCart,
            getTotal,
            getQuantity
        }}>
            {children}

    </Context.Provider>
    
  )
}

export default Context
