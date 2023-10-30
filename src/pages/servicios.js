import Head from "next/head"
import Navigation from "@/components/Navigation"


const Servicios = () => {
  return (
   
    <>

<Head>
   <title> Comidas Caceras</title> 
   
          <link rel="stylesheet" href="./styles/normalize.css" />
          <link rel="stylesheet" href="./styles/skeleton.css" />
          <link rel="stylesheet" href="./styles/style.css" />
      
</Head>
  
  <main>
    <header>
      <Navigation />
    </header>
    <h1>Servicios</h1>
  </main>
  
    </>
  )
}

export default Servicios