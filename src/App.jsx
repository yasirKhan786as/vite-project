import Header from './components/Header'
import NavBar from './components/NavBar'
import LeftRightDiv from './components/LeftRightDiv'
import SliderObject from './components/SliderObject'
import SliderObjectTable from './components/SliderObjectTable'
import './App.css'
import BelowSlider from './components/BelowSlider'
import Twodiv from './components/Twodiv'
import LastPart from './components/LastPart'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useRef } from 'react'
import _1shirt from "./assets/TShirts/ai-generated-8520248_1280.jpg"
import _2shirt from "./assets/TShirts/ai-generated-8520240_1280.jpg"
import _3shirt from"./assets/TShirts/jeans-1234687_1280.jpg"
import _4shirt from"./assets/TShirts/ai-generated-8751040_1280.png"
import _5shirt from"./assets/TShirts/tshirt-8726721_1280.jpg"

import _1jeans from "./assets/Jeans/pexels-bianeyre-2363825.jpg"
import _2jeans from "./assets/Jeans/pexels-godisable-jacob-226636-1346187.jpg"
import _3jeans from "./assets/Jeans/pexels-heitorverdifotos-2343661.jpg"
import _4jeans from "./assets/Jeans/pexels-mahe-haroutinian-322834-1804075.jpg"
import _5jeans from "./assets/Jeans/pexels-miyatavictor-1957154.jpg"

import _1shoes from "./assets/Shoes/pexels-chuck-3261068.jpg"
import _2shoes from "./assets/Shoes/pexels-cottonbro-6594253.jpg"
import _3shoes from "./assets/Shoes/pexels-hurrahsuhail-11324547.jpg"
import _4shoes from "./assets/Shoes/pexels-omar-markhieh-637410-1447262.jpg"
import _5shoes from "./assets/Shoes/pexels-webdonut-19090.jpg"

import _1shirts from "./assets/Shirts/pexels-cottonbro-6069563.jpg"
import _2shirts from "./assets/Shirts/pexels-gabrielapereiraph-2635315.jpg"
import _3shirts from "./assets/Shirts/pexels-jeffreyreed-769732.jpg"
import _4shirts from "./assets/Shirts/pexels-ron-lach-10558182.jpg"
import _5shirts from "./assets/Shirts/pexels-shkrabaanthony-5893860.jpg"




function App() {


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


  return (
    <>

    <Header/>
    <NavBar ScrollToShoes={ScrollToShoes} ScrollToJeans={ScrollToJeans} ScrollToPants={ScrollToJPants} ScrollToShirts={ScrollToShirts} ScrollToTShirts={ScrollToTShirts}/>

    <LeftRightDiv/>

    <SliderObject title="Shoes" desc="Voir Toite La Collection" ref={targetShoes}>
    <Carousel responsive={responsive}>
      <SliderObjectTable shirts={_1shoes}/>
      <SliderObjectTable shirts={_2shoes}/>
      <SliderObjectTable shirts={_3shoes}/>
      <SliderObjectTable shirts={_4shoes}/>
      <SliderObjectTable shirts={_5shoes}/>
   
      </Carousel>
    </SliderObject>


    <SliderObject title="Shirts" desc="Voir Toite La Collection" ref={targetShirts}>
    <Carousel responsive={responsive}>
      <SliderObjectTable shirts={_1shirts}/>
      <SliderObjectTable shirts={_2shirts}/>
      <SliderObjectTable shirts={_3shirts}/>
      <SliderObjectTable shirts={_4shirts}/>
      <SliderObjectTable shirts={_5shirts}/>
  
      </Carousel>
    </SliderObject>

    <SliderObject title="Jeans" desc="Voir Toite La Collection" ref={targetJeans}>
    <Carousel responsive={responsive}>
      <SliderObjectTable shirts={_1jeans}/>
      <SliderObjectTable shirts={_2jeans}/>
      <SliderObjectTable shirts={_3jeans}/>
      <SliderObjectTable shirts={_4jeans}/>
      <SliderObjectTable shirts={_5jeans}/>
     
      </Carousel>
    </SliderObject>   

   
    <SliderObject title="T-Shirts" desc="Voir Toite La Collection" ref={targetTShirts}>
    <Carousel responsive={responsive}>
      <SliderObjectTable shirts={_2shirt}/>
      <SliderObjectTable shirts={_5shirt}/>
      <SliderObjectTable shirts={_3shirt}/>
      <SliderObjectTable shirts={_4shirt}/>
      <SliderObjectTable shirts={_1shirt}/>
      </Carousel>
    </SliderObject>
   


    {/* <SliderObject title="Ces produits pourraient vous intéresser" desc="Voir Toite La Collection" id="sliderobjectid">
      <SliderObjectTable className="slider-object-table-width"/>
      <SliderObjectTable className="slider-object-table-width"/>
      <SliderObjectTable className="slider-object-table-width"/>
    </SliderObject> */}
    <BelowSlider/>
    <Twodiv/>
    <LastPart />

    </>
  )
}

export default App
