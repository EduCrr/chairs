import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./routes";
import Footer from "./components/Footer";
import ProductProvider from "./contexts/productContext";
export default function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </ProductProvider>
  );
}
