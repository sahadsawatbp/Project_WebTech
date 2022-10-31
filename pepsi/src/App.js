import ProductPage from './components/product/ProductPage'
import Homepage from './components/HomePage/homePage';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PurchesPage from './components/purchase/purchase';
function App() {
  return (

        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="/product" element={<ProductPage></ProductPage>}></Route>
          <Route path="/purches" element={<PurchesPage></PurchesPage>}></Route>
        </Routes>
  );
}

export default App;
