import React,{useEffect} from 'react'
import { getMenData } from '../redux/AppReducer/action'
import { Grid, GridItem } from '@chakra-ui/react'
 
import { useSelector,useDispatch } from 'react-redux'

import ProductAddToCart from '../component/ProductAddToCart'
const Men = () => {
  const dispatch = useDispatch();
 const data = useSelector((state)=>state.AppReducer.mens);
useEffect(()=>{
 dispatch(getMenData ())
},[])
console.log(data)


  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={1}>
     {data?.map((el)=>(
       <GridItem>

         <ProductAddToCart key={el.img.img1} {...el}/>
       </GridItem>
       ))}
    </Grid>
  )
}

export default Men