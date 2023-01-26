
import { Routes, Route } from "react-router-dom";

import './App.css';

import About from "./pages/About";
import Frontpage from "./pages/Frontpage";
import Home from "./pages/Home";

function App() {
  return (
   
<Routes>
      <Route path="/" element={<Frontpage />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
</Routes>


  );
}

export default App;
