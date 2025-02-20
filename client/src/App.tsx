import { Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import CartPage from "./pages/CartPage";
import FavouritesPage from "./pages/FavouritesPage";
import { ProductsProviderWrapper } from "./context/products.context";

function App() {
  return (
    <>
      <ProductsProviderWrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
        <Cart />
      </ProductsProviderWrapper>
    </>
  );
}

export default App;
