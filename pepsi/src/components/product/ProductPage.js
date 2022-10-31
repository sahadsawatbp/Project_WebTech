import Product from "./Product"
import products from "./products.json"
import Navbar from "../HomePage/navbar";
import "./ProductPage.css"
import { Routes,Route } from "react-router-dom";
import Product1 from "./product_detail/Product1"
const ProductPage = () =>{
  return (
    <div className="product-navbar"><Navbar />
        <div className="product-container">
          {products.map((element)=>{
            return <Product name={element.name} img_product={element.img_product} background_color={element.background_color} id={element.id} page={element.page} key={element.id}/>
          })}
        </div>
        <Routes>
          <Route path="product_1" element={<Product1/>}></Route>
        </Routes>
    </div>
    
  )
}

export default ProductPage;
