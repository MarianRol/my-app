import HtmlContent from './components/HtmlContent'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

import CarouselBurguer from './components/CarouselBurguer'
import './styles/globals.css'






const App = () => {
  return (

    <>
    
    <div className='App'> 
    <Navigation/>
    <HtmlContent/>
    <CarouselBurguer/>
    <Footer/>
  
    </div>    
    </>

  )
}

export default App;


