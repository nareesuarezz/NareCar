import CarListWankel from "../../components/carListWankel/CarListWankel";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Cars.css"

function CarsWankel(){
return(
<>
<Header />
<h1>Catálogo de vehículos con motor Wankel</h1>
<CarListWankel/>
<Footer/>
</>

);
}
export default CarsWankel;