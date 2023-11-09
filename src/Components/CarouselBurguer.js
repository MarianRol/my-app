import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const CarouselBurguer = () => {
  return (
   <div>

        <Carousel>
    <Carousel.Item>
      
         <img
        className="imagesBurguers"
        src="https://theburgermaker.com/wp-content/uploads/2022/08/gabraloca.png"
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
        src="https://prior-client-images.s3.eu-west-2.amazonaws.com/burgermaker/9222f8c428ad5088a9560b8b18099b05.png"
        alt="Cabra Doble"
      />
      <Carousel.Caption>
        <h5>Cabra Doble</h5>
        <p>Combo: papas rusticas y gaseosa</p>
      </Carousel.Caption>
   
    </Carousel.Item>
    <Carousel.Item>
  
      <img
        className="imagesBurguers"
        src="https://prior-client-images.s3.eu-west-2.amazonaws.com/burgermaker/1e5ae71171f3065a839be04ae371619c.png"
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
        src="https://prior-client-images.s3.eu-west-2.amazonaws.com/burgermaker/42b64213c5083d3424a4b620a2e22165.png"
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
        src="https://theburgermaker.com/wp-content/uploads/2022/08/gabraloca.png"
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
