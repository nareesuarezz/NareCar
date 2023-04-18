import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Pages/home/Home';
import Cars from './Pages/cars/Cars';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cars" element={<Cars/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
