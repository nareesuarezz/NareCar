import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Pages/home/Home';
import CarsV6 from './Pages/cars/CarsV6';
import CarsWankel from './Pages/cars/CarsWankel';
import Cars4L from './Pages/cars/Cars4L';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/carsV6" element={<CarsV6/>}/>
          <Route path="/carsWankel" element={<CarsWankel/>}/>
          <Route path="/cars4L" element={<Cars4L/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
