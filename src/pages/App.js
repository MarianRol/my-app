import HtmlContent from './components/HtmlContent'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Button from './components/Button'
import './styles/globals.css'
import './styles/style.css'
import './styles/normalize.css'
import './styles/skeleton.css'
import CarouselBurguer from './components/CarouselBurguer'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div className='App'> 
    <Navigation/>
    <HtmlContent/>
    <CarouselBurguer/>
    <Footer/>
    <Button/>
    </div>
  )
}

export default App;


