import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./menu/Home";
import Menu from "./menu/Menu";
import Dish from "./menu/Dish";
import Cart from "./cart/Cart";
import Checkout from "./checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="menu/:id" element={<Dish />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
