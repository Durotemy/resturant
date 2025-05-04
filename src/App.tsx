import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Cart from "./Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
