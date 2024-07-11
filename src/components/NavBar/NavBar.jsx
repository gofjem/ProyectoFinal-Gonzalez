import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Box,
    Button,
    Flex,
    Heading,
    Center,
    Image
  } from '@chakra-ui/react'
  import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'



const NavBar = () => {
  return (
    <Flex h={'10vh'} w={'100%'} justify={'space-between'} align={'center'} backgroundColor={'#5B2E48'}>
        <Heading fontSize={'x-large'} m={3}>
          <Link to='/'>
            <Image w={'20%'} src={logo}/>
          </Link></Heading>
        <Menu>
            <MenuButton as={Button} rightIcon={<IoMdMenu />}>
                Categorias
            </MenuButton>
            <MenuList>
                <MenuItem>
                <Link to='/categorias/Tecnologia'>Tecnologia</Link>
                </MenuItem>
                <MenuItem>
                <Link to='/categorias/Hogar'>Hogar</Link>
                </MenuItem>
                <MenuItem>
                <Link to='/categorias/Polerones'>Polerones</Link>
                </MenuItem>
                <MenuItem>
                <Link to='/categorias/Zapatillas'>Zapatillas</Link></MenuItem>
            </MenuList>
        </Menu>
        <CartWidget/>
      
    </Flex>
  )
}

export default NavBar
