import { useEffect, useState } from "react";
import CarService from "../../services/car.servicesWankel";
import "./CarListWankel.css"

function CarListWankel() {
  const [cars, setCars] = useState([]);
  const [query, setQuery] = useState("");

  const getCars = () => {
    const allCars = CarService.getCars();
    setCars(allCars);
  }


  const showCars = () => {
    return (
      cars.filter(c => c.brand.toLowerCase().includes(query.toLowerCase()) ||
        c.model.toLowerCase().includes(query.toLowerCase()) ||
        c.price.toString().toLowerCase().includes(query.toLowerCase())).map(c => {
          return (
            <div className="car-list-item">
              <div className="car-list-img">
                <img src={`/assets/img/${c.img}`} alt="car" />
              </div>
              <p>{c.brand} - {c.model} - {c.price}</p>
            </div>
          );
        })
    );
  }

  const handleChange = (event) => {
    const searchValue = event.target.value;
    setQuery(searchValue);
  }

  useEffect(() => {
    getCars();
  }, []);

  return (
    <>
     <div className="search">
        <h2>¿Qué buscas?</h2>
        <input type="search" onChange={handleChange} />
      </div>
      <div className="middle-text">
        <p className="text">"El motor Wankel (también conocido como motor rotativo) es un tipo de motor de combustión interna, ideado por Félix Wankel, y convertido en algo práctico por Walter Froede, de NSU; que utiliza rotores en vez de los pistones de los motores alternativos.

          Wankel concibió su motor rotativo en 1924 y obtuvo la patente en 1926 (CA360492; FR1133762; FR1166192; FR888513). Durante los años 1940 se dedicó a mejorar el diseño, y también ideó un motor para torpedo con válvulas rotativas en cabeza, Jumo KM 8. En los años 1950 y los 1960 se hicieron grandes esfuerzos en desarrollar los motores rotativos Wankel. Eran especialmente interesantes por funcionar de forma suave y silenciosa, y con escasas averías, gracias a la simplicidad de su diseño."</p>
      </div>
      {/* <input type="search" onChange={handleChange} /> */}
      <div className="main-container">
        <div className="car-list-container">
          {showCars()}
        </div>

      </div>
    </>
  );
}

export default CarListWankel;