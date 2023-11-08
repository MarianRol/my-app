
import ShoppingCart from "@/Actions/ShoppingCart"
import Head from "next/head"
import HtmlContent from "@/components/HtmlContent"
import Footer from "@/components/Footer"
import CarouselBurguer from "@/components/CarouselBurguer"

import Section from "@/components/Section"

const Index = () => {
  
  return (
    <>
    
    <Head>
   
   <title> Comidas Caseras</title>
   
    <HtmlContent/> 

    </Head>
    
    <main>
  
     <Section/>
     <CarouselBurguer/>
     <ShoppingCart/>
     <Footer/>
     
    </main>
      
    </>
  )
}

export default Index