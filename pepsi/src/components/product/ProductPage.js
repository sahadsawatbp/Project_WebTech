import Product from "./Product"
import products from "./products.json"
import Navbar from "../HomePage/navbar";
import { Link } from "react-router-dom";
import "./ProductPage.css"

function ProductPage(){
  return (
      <div className="product-container">
        {products.map((element)=>{
          return <Product name={element.name} img_product={element.img_product} background_color={element.background_color} key={element.id}/>
        })}
      </div>
  );
}

export default ProductPage;
