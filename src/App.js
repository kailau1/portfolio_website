import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PortfolioMain from './pages/PortfolioMain';
import PortfolioCorteiz from './pages/PortfolioCorteiz';
import PortfolioPalestine from './pages/PortfolioPalestine';
import PortfolioPeople from './pages/PortfolioPeople';
import AdminHome from './admin/AdminHome';
import AddProduct from './admin/AddProduct';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio_main" element={<PortfolioMain />} />
          <Route path="/portfolio_people" element={<PortfolioPeople />} />
          <Route path="/portfolio_events"element={<PortfolioCorteiz />} />
          <Route path="/portfolio_protest" element={<PortfolioPalestine />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/IN_COLD_BLOOD" element={<ProductDetail />} />
          <Route path="/htrapzyweaintdun/" element={<AdminHome />} />
          <Route path="/htrapzyweaintdun/add_product" element={<AddProduct />} />
        </Routes>
    </Router>
  );
}

export default App;
