import { useEffect, useState } from "react";
import CarService from "../../services/car.services";
import "./CarList.css"

function CarList() {
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
      <input type="search" onChange={handleChange} />
      {/* <input type="search" onChange={handleChange} /> */}
      <div className="main-container">
        <div className="car-list-container">
          {showCars()}
        </div>
        <div className="right-text">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      </div>
    </>
  );
}

export default CarList;