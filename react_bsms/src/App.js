import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainTemplate from "./MainTemplate";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import Register from "./pages/Register";
import Services from "./pages/Services";
import Shop from "./pages/Shop";
import AllProduct from "./product/AllProduct";
import ProductList from "./components/ProductList";
// import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="" element={<MainTemplate />}>
        <Route index element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/serv" element={<ProductList />} /> */}
      </Route>

      {/* <Route index element={<Home />} /> */}
    </Routes>
  );
}

export default App;
