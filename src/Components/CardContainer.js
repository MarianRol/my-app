
import Cards from './Cards'

const CardContainer = () => {

    const platillos = [
        {
          id: 1,
          img: "./images/cabracompleta.jpg",
          title: "Cabra Completa",
          text: "Carne XL, cheddar, bacon, y salsa Cabras Locas.",
        },
        {
          id: 2,
          img: "./images/cabradoble.jpg",
          title: "Cabra Doble",
          text: "Doble Carne, lechuga, tomate, bacon, ketchup, y salsa golf.",
        },   
        {
          id: 3,
          img: "./images/cabrafondo.jpg",
          title: "Cabra Fondo",
          text: "Carne grillada, huevo, jamon, queso, pepino y salsa criolla.",
        }, 
        {
          id: 4,
          img: "./images/cabrasimple.jpg",
          title: "Cabra Simple",
          text: "Carne, lechuga, tomate, jamon y queso.",
        },
        {
          id: 5,
          img: "./images/cabratriple.jpg",
          title: "Cabra Triple",
          text: "Triple Carne XL, triple cheddar, cebolla caramelizada, y salsa Cabras Locas.",
        },
        {
          id: 6,
          img: "./images/platillo1.jpg",
          title: "Cabra Bomba",
          text: "Cuadruple Carne XL, cheddar, bacon, y salsa Cabras Locas.",
        },
      ];

  return (
    <>

      <div className="estilocardscont">
        {
            platillos.map((platillo) => <Cards key={platillo.id} data={platillo}/>)
        }
      </div>  
    </>
    
  )
}

export default CardContainer