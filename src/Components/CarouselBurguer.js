import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const CarouselBurguer = () => {
  return (
   <div>

        <Carousel>
    <Carousel.Item>
      
         <img
        className="imagesBurguers"
        src="https://prior-client-images.s3.eu-west-2.amazonaws.com/burgermaker/e3c27f9f78a74c0aa95a85979516ed81.png"
        alt="Cabra Doble"
      />
      
      <Carousel.Caption>
        <h5>Hambuguesa Doble Extra Chedar</h5>
        <p>Combo: papas fritas y gaseosa</p>
      </Carousel.Caption>
    
    </Carousel.Item>
    <Carousel.Item>
   
      <img
        className="imagesBurguers"
        src="https://prior-client-images.s3.eu-west-2.amazonaws.com/burgermaker/0a78f2d4c1256d115b92ee37b1657ec0.png"
        alt="Cabra Triple"
      />
      <Carousel.Caption>
        <h5>Cabra Triple</h5>
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
        src="https://prior-client-images.s3.eu-west-2.amazonaws.com/burgermaker/e316cd5383fc598d8dee7bbb727f76db.png"
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
