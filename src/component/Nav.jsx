 import React from 'react'
 import style from "./Nav.module.css"
 import { Button, Flex } from '@chakra-ui/react'
import {Link} from "react-router-dom"
 
 const Nav = () => {
   return (
     <div className={style.Nav}> 
     
     <div> <Link to='/'>
   Home
     </Link>
     </div>
    <div> <Link to='/men'>
     Men
     </Link>
     </div>
     
     <Flex gap={"2"}>
     <Button>
     signup

     </Button>
     <Button>
     sign

     </Button>
     </Flex>

     </div>
   )
 }
 
 export default Nav