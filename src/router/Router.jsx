import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../pages/Home'
import Men from '../pages/Men'
const Router  = () => {
  return (
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/mens' element={<Men/>}/>
     
    </Routes>
  )
}

export default Router