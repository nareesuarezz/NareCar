
import CarListV6 from "../../components/carListV6/CarListV6";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import "./Cars.css"

function CarsV6(){
return(
<>
<Header />
<h1>Catálogo de vehículos con motor V6</h1>
<CarListV6/>
<Footer/>
</>

);
}
export default CarsV6;