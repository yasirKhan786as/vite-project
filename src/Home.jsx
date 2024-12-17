import Header from './components/Header'
import NavBar from './components/NavBar'
import LeftRightDiv from './components/productBox'
import SliderObject from './components/SliderObject'
import SliderObjectTable from './components/SliderObjectCard'
import './App.css'
import toast, { Toaster } from 'react-hot-toast';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useRef } from 'react'
import { Card, Card1, Card2, Card3} from './data'
import { getCartItems } from './utils/api'



function Home({setProductId, cartAllProduct}) {


    const targetShoes = useRef(null)
    const targetShirts = useRef(null)
    const targetJeans = useRef(null)
    const targetPants = useRef(null)
    const targetTShirts = useRef(null)
  
    function ScrollToShoes() {
      if(targetShoes.current){
    targetShoes.current.scrollIntoView({ behavior: "smooth" });
    console.log("clicked")
      }
    };
    function ScrollToShirts() {
      if(targetShoes.current){
    targetShirts.current.scrollIntoView({ behavior: "smooth" });
      }
    };
    function ScrollToJeans() {
      if(targetShoes.current){
    targetJeans.current.scrollIntoView({ behavior: "smooth" });
      }
    };
    function ScrollToJPants() {
      if(targetShoes.current){
    targetPants.current.scrollIntoView({ behavior: "smooth" });
      }
    };
    function ScrollToTShirts() {
      if(targetShoes.current){
    targetTShirts.current.scrollIntoView({ behavior: "smooth" });
      }
    };
  
  
  
  
  
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      },
    
    };
    
  
    function AddToCart(id){
        
        setProductId(id);
        toast.success('Added to Cart Successfully !!');
    }
    return (
      <>
     
     <Header cartAllProduct={cartAllProduct}/>
  
     <Toaster />
      <NavBar ScrollToShoes={ScrollToShoes} ScrollToJeans={ScrollToJeans} ScrollToPants={ScrollToJPants} ScrollToShirts={ScrollToShirts} ScrollToTShirts={ScrollToTShirts}/>
  
      <LeftRightDiv/>
  
      <SliderObject title="Shoes" desc="Voir Toite La Collection" ref={targetShoes}>
      <Carousel responsive={responsive}>
        {/* <SliderObjectTable {...Card[0]}/>
        <SliderObjectTable {...Card[1]}/>
        <SliderObjectTable {...Card[2]}/>
        <SliderObjectTable {...Card[3]}/>
        <SliderObjectTable {...Card[4]}/> */}
        {Card.map((conceptItem) => {  return(<SliderObjectTable key={conceptItem.id} {...conceptItem} AddToCart={() => AddToCart(conceptItem.id)}/>)})}
        
     
        </Carousel>
      </SliderObject>
  
  
      <SliderObject title="Shirts" desc="Voir Toite La Collection" ref={targetShirts}>
      <Carousel responsive={responsive}>
      {Card1.map((conceptItem) => {return (<SliderObjectTable key={conceptItem.id} {...conceptItem} AddToCart={() => AddToCart(conceptItem.id)}/>)})}
    
        </Carousel>
      </SliderObject>
  
      <SliderObject title="Jeans" desc="Voir Toite La Collection" ref={targetJeans}>
      <Carousel responsive={responsive}>
      {Card2.map((conceptItem) => {  return(<SliderObjectTable key={conceptItem.id} {...conceptItem} AddToCart={() => AddToCart(conceptItem.id)}/>)})}
       
        </Carousel>
      </SliderObject>   
  
     
      <SliderObject title="T-Shirts" desc="Voir Toite La Collection" ref={targetTShirts}>
      <Carousel responsive={responsive}>
        {Card3.map((conceptItem) => {  return(<SliderObjectTable key={conceptItem.id} {...conceptItem} AddToCart={() => AddToCart(conceptItem.id)}/>)})}
        </Carousel>
      </SliderObject>
     
  
  
      </>
    )
  }
  
  export default Home
  