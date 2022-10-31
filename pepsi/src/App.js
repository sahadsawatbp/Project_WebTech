import ProductPage from './components/product/ProductPage'
import Homepage from './components/HomePage/homePage';
import React from 'react';
import {Routes, Route } from "react-router-dom";
import PurchesPage from './components/purchase/purchase';
function App() {
  return (

        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/product" element={<ProductPage/>}></Route>
          <Route path="/purches" element={<PurchesPage/>}></Route>
        </Routes>
  );
}

export default App;
