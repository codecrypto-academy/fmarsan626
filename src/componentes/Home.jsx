import { Carrusel } from "./Carrusel";
import { Footer } from "./Footer";
import { Precios } from "./Precios";
import { Header } from "./Header";

 export function Home(){
    return <div>
        <Header></Header>
        <Carrusel></Carrusel>
        <Precios></Precios>
        <Footer></Footer>
    </div>
 }