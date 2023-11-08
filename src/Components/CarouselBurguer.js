import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const CarouselBurguer = () => {
  return (
   <div>

        <Carousel>
    <Carousel.Item>
      
         <img
        className="imagesBurguers"
        src="..."
        alt="Cabra Completa"
      />
      
      <Carousel.Caption>
        <h5>Hambuguesa Doble Extra Chedar</h5>
        <p>Combo: papas fritas y gaseosa</p>
      </Carousel.Caption>
    
    </Carousel.Item>
    <Carousel.Item>
   
      <img
        className="imagesBurguers"
        src="./images/cabradoble.jpg"
        alt="caradoble"
      />
      <Carousel.Caption>
        <h5>Cabra Doble</h5>
        <p>Combo: papas rusticas y gaseosa</p>
      </Carousel.Caption>
   
    </Carousel.Item>
    <Carousel.Item>
  
      <img
        className="imagesBurguers"
        src="./images/cabrafondo.jpg"
        alt="Cabra Fondo"
      />
      <Carousel.Caption>
        <h5>Cabra Fondo</h5>
        <p>
        Combo: papas fritas y agua mineral
        </p>
      </Carousel.Caption>
      
    </Carousel.Item>
    <Carousel.Item>
   
      <img
        className="imagesBurguers"
        src="./images/cabrasimple.jpg"
        alt="Cabra Simple"
      />
      <Carousel.Caption>
        <h5>Cabra Simple</h5>
        <p>Combo: papas rusticas y jugo de naranja</p>
      </Carousel.Caption>
    
    </Carousel.Item>


    <Carousel.Item>
  
      <img
        className="imagesBurguers"
        src="./images/cabracompleta.jpg"
        alt="Cabra Completa"
      />
      <Carousel.Caption>
        <h5>Cabra Completa</h5>
        <p>Combo: papas fritas y cerveza</p>
      </Carousel.Caption>
    
    </Carousel.Item>


  </Carousel>
   </div> 

  
  )
}

export default CarouselBurguer
