import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Pages/home/Home';
import CarsV6 from './Pages/cars/CarsV6';
import CarsWankel from './Pages/cars/CarsWankel';
import Cars4L from './Pages/cars/Cars4L';
import Database from './Pages/firebase/Database';
import News from './Pages/news/news';
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
          <Route path="/renting" element={<Database/>}/>
          <Route path="/news" element={<News/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
