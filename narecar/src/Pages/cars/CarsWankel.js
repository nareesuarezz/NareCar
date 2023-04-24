import CarList from "../../components/carList/CarList";
import Header from "../../components/header/Header";
import "./Cars.css"

function CarsWankel(){
return(
<>
<Header />
<h1>Catálogo de vehículos con motor Wankel</h1>
<CarList/>
</>

);
}
export default CarsWankel;