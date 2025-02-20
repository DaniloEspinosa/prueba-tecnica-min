import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ProductsProviderWrapper } from "./context/products.context.tsx";
import { CartProviderWrapper } from "./context/cart.context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProviderWrapper>
      <ProductsProviderWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductsProviderWrapper>
    </CartProviderWrapper>
  </StrictMode>
);
