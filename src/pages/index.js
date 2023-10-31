import Navigation from "@/components/Navigation"
import ShoppingCart from "@/Actions/ShoppingCart"
import Head from "next/head"
import HtmlContent from "@/components/HtmlContent"
import Footer from "@/components/Footer"

const index = () => {
  return (
    <>
    
    
    <Head>
   
   <title> Comidas Caseras</title>
   
    <HtmlContent/> 

    </Head>
    
    <main>
     
     <ShoppingCart/>
     <Footer/>
     
    </main>
      
    
    </>
  )
}

export default index