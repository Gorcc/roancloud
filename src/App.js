import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import About from './Routes/About';
import Privacy from './Routes/Privacy';
import Terms from './Routes/TermsConditions';
import Warehouses from './Routes/Warehouses';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="privacy-policy" element={<Privacy />} />
        <Route path="terms-conditions" element={<Terms />} />
        <Route path="warehouses" element={<Warehouses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
