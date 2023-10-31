
import Link from "next/link"

const Navigation = () => {
  return (
    <>

    <nav className="navbar">

        <Link className="link" href="/">Inicio</Link>
        <Link className="link" href="/servicios">Servicios</Link>
        <Link className="link" href="/contactos">Contactos</Link>
    </nav>



    </>
  )
}

export default Navigation
