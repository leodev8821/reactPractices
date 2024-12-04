import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/clase24_2_Router/pages/Home';
import About from './components/clase24_2_Router/pages/About';
import ProductList from "./components/clase24_2_Router/pages/ProductList";
import NotFound from './components/clase24_2_Router/pages/NotFound';
import NavBar from './components/clase24_2_Router/components/NavBar';
import Footer from './components/clase24_2_Router/components/Footer';
import Header from './components/clase24_2_Router/components/Header'


function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
