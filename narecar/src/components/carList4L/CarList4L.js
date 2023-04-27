import { useEffect, useState } from "react";
import CarService from "../../services/car.services4L";
import "./CarList4L.css"

function CarList4L() {
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
        <p className="text">"El motor de cuatro cilindros en línea es un tipo de motor de combustión interna que se caracteriza por tener cuatro cilindros montados en una sola fila. La única bancada de cilindros puede estar orientada en un plano vertical o inclinado, con todos los pistones impulsando un cigüeñal común."</p>
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

export default CarList4L;