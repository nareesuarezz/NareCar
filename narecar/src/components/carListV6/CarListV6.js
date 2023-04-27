import { useEffect, useState } from "react";
import CarService from "../../services/car.servicesv6";
import "./CarListV6.css"

function CarListV6() {
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
        <p className="text">"V6 es una configuración de motor de combustión interna en la que 6 cilindros están dispuestos en dos bancadas de 3 cilindros unidas por la parte de abajo, formando una "V". Estos motores pueden ser tanto de ciclo Otto, como de ciclo Diésel.
          En el pasado, los motores de 6 cilindros en línea eran predominantes, ya que no había necesidad de producir motores compactos, una vez que los automóviles eran producidos con tracción trasera. Los factores que más contribuyen para tornar los motores V6 más adecuados que los motores de 6 cilindros en línea son: la generalización del uso de la tracción delantera, y la tendencia actual de estética, en la que predomina el frente en forma de cuña, lo que demanda motores compactos montados generalmente en posición transversal."</p>
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

export default CarListV6;