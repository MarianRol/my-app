
import Link from "next/link"

const Footer = () => {
  return (
    <>

    <footer className="footer1">

        <Link className="link" href="/restaurante">Restaurante</Link>
        <Link className="link" href="/ubicacion">Ubicación</Link>
        <Link className="link" href="/servicios">Servicios</Link>
        
    </footer>



    </>
  )
}

export default Footer