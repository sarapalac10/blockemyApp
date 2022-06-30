import { BrowserRouter, Route, Routes } from "react-router-dom";
import Listado from "./components/Listado";
import Login from "./components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Detalle from "./components/Detalle";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/listado" element={<Listado/>} />
        <Route path="/detalle" element={<Detalle/>} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
