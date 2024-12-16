
import './App.css'
import Cart from './components/Cart/Cart'
import Home from './Home.jsx'
import 'react-multi-carousel/lib/styles.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { useEffect, useState } from 'react';
import { Card, Card1, Card2, Card3 } from './data.js';




function App() {
 const [productId, setProductId] = useState('')
 const [cartAllProduct, setCartAllProduct] = useState([])

  const filteredArrays = (array) => {
    return array.filter((Product) => Product.id == productId);
    
  }
 
 
    useEffect(() =>
    {
      const card = filteredArrays(Card)
      const card1 = filteredArrays(Card1)
      const card2 = filteredArrays(Card2)
      const card3 = filteredArrays(Card3)
  

      setCartAllProduct([...cartAllProduct, ...card, ...card1, card2, card3])
      // const filteredProduct = Card.filter((Product) => Product.id == productId);
      // //most important part here we are matching our given productId to Card ids if it will it will retur the object which 
      // // matches in the array
      // setCartAllProduct([...cartAllProduct, ...filteredProduct]) //here we use use effect hook for every iteration and ...filter
      // //...filterdProduct is used to make the array an object and ...cartAllProduct is used to spread other objects also
      

    }, [productId])

    // useEffect(() =>
    // {
    //   const filteredProduct = Card1.filter((Product) => Product.id == productId);
    //   //most important part here we are matching our given productId to Card ids if it will it will retur the object which 
    //   // matches in the array
    //   setCartAllProduct([...cartAllProduct, ...filteredProduct]) //here we use use effect hook for every iteration and ...filter
    //   //...filterdProduct is used to make the array an object and ...cartAllProduct is used to spread other objects also

    // }, [productId])
    // useEffect(() =>
    // {
    //   const filteredProduct = Card2.filter((Product) => Product.id == productId);
    //   //most important part here we are matching our given productId to Card ids if it will it will retur the object which 
    //   // matches in the array
    //   setCartAllProduct([...cartAllProduct, ...filteredProduct]) //here we use use effect hook for every iteration and ...filter
    //   //...filterdProduct is used to make the array an object and ...cartAllProduct is used to spread other objects also

    // }, [productId])
    // useEffect(() =>
    // {
    //   const filteredProduct = Card3.filter((Product) => Product.id == productId);
    //   //most important part here we are matching our given productId to Card ids if it will it will retur the object which 
    //   // matches in the array
    //   setCartAllProduct([...cartAllProduct, ...filteredProduct]) //here we use use effect hook for every iteration and ...filter
    //   //...filterdProduct is used to make the array an object and ...cartAllProduct is used to spread other objects also

    // }, [productId])


    // these approaches are for single slider





  return (
    <>
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home setProductId={setProductId} cartAllProduct={cartAllProduct}/>}></Route>
      <Route path='/cart' element={<Cart  cartAllProduct={cartAllProduct} setCartAllProduct={setCartAllProduct}/>}></Route>
    </Routes>
    </BrowserRouter>

    
   
    </>
  )
}

export default App
