import CarList4L from "../../components/carList4L/CarList4L";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Cars.css"

function Cars4L(){
return(
<>
<Header />
<h1>Catálogo de vehículos con motor 4 en línea</h1>
<CarList4L/>
<Footer/>
</>

);
}
export default Cars4L;