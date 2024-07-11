import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailProduct from './components/ItemDetailContainer/ItemDetailContainer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';



function App() {

  return (
  <ChakraProvider>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer title='Lo quieres, Lo tienes'/>} />
          <Route path='/categorias/:categoryId' element={<ItemListContainer title='Lo quieres, lo tienes'/>}/>
          <Route path='/producto/:productId' element={<ItemDetailProduct/>}/>
          <Route path='/*' element={<PageNotFound/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  </ChakraProvider>
  )
}

export default App

