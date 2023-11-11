
import ShoppingCart from "@/Actions/ShoppingCart"
import Head from "next/head"
import HtmlContent from "@/components/HtmlContent"
import Footer from "@/components/Footer"
import CarouselBurguer from "@/components/CarouselBurguer"
import 'bootstrap/dist/css/bootstrap.min.css'
import Section from "@/components/Section"
import Navigation from "@/components/Navigation"

const Index = () => {
  
  return (
    <>
    
    <Head>
   
       <title> Comidas Caseras</title>

    </Head>
    <Navigation/> 
    <main>
   <HtmlContent/> 
     <Section/>
     <CarouselBurguer/>
     <ShoppingCart/>
     <Footer/>
     
    </main>
      
    </>
  )
}

export default Index