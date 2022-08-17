import React,{useEffect} from 'react'
import { getMenData } from '../../redux/AppReducer/action'
import Nav from '../component/Nav'

const Men = () => {

 const data = useSelector((state)=>state.AppReducer.mens);
useEffect(()=>{
 dispatch(getMenData (getBooksParams))
})
console.log(data)


  return (
    <div>
     men
    </div>
  )
}

export default Men