import Navigation from "@/components/Navigation"
import ShoppingCart from "@/Actions/ShoppingCart"
import Head from "next/head"
import HtmlContent from "@/components/HtmlContent"
import Footer from "@/components/Footer"

const index = () => {
  return (
    <>
    
    
    <Head>
   
   <title> Comidas Caceras</title>
    <link rel="stylesheet" href="../styles/skeleton.css" />
    <link rel="stylesheet" href="../styles/normalize.css" />
    <link rel="stylesheet" href="../styles/styles.css" />
    
    <HtmlContent/> 

    </Head>
    
    <main>
     
     
     <header>
        <Navigation />
      <ShoppingCart/>
      
      </header>
      
     
    </main>
    <Footer/>  
    
    </>
  )
}

export default index