import Product from "./Product"
import products from "./products.json"
import Navbar from "../HomePage/navbar";
import "./ProductPage.css"

const ProductPage = () =>{
  return (
    <div><Navbar></Navbar>
      <div className="product-container">
        {products.map((element)=>{
          return <Product name={element.name} img_product={element.img_product} background_color={element.background_color} key={element.id}/>
        })}
      </div>
    </div>
  )
}

export default ProductPage;
