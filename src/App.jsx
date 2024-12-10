import Header from './components/Header'
import NavBar from './components/NavBar'
import LeftRightDiv from './components/LeftRightDiv'
import SliderObject from './components/SliderObject'
import SliderObjectTable from './components/SliderObjectTable'
import './App.css'
import BelowSlider from './components/BelowSlider'
import Twodiv from './components/Twodiv'
import LasrPart from './components/LastPart'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function App() {
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
    }
  };
  return (
    <>
    <Header/>
    <NavBar/>
    <div id='below-navbar'><span>Home</span><span>&bull;Art de la table</span></div>
    <LeftRightDiv/>

    <SliderObject title="Articles Similaires" desc="Voir Toite La Collection">
    <Carousel responsive={responsive}>
      <SliderObjectTable/>
      <SliderObjectTable/>
      <SliderObjectTable/>
      <SliderObjectTable/>
      <SliderObjectTable/>
      <SliderObjectTable/>
      </Carousel>
    </SliderObject>
   


    <SliderObject title="Ces produits pourraient vous intéresser" desc="Voir Toite La Collection" id="sliderobjectid">
      <SliderObjectTable className="slider-object-table-width"/>
      <SliderObjectTable className="slider-object-table-width"/>
      <SliderObjectTable className="slider-object-table-width"/>
    </SliderObject>
    <BelowSlider/>
    <Twodiv/>
    <LasrPart/>

    </>
  )
}

export default App
