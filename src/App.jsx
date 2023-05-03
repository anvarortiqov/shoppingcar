import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Cars from "./pages/Cars";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router";
import Benz from "./components/Benz";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cars/:id" element={<Benz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
