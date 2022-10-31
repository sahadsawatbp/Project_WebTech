import "./Product.css"
const Product = ({name,img_product,background_color}) =>{
    const design = background_color
    return (
        <div className="product-item">
            <p id="tooltip"><strong>{name}</strong></p>
            <div className="background-color" style={{background:design}}></div>
            <p><strong>{name}</strong></p>
            <img src={img_product} alt=""/>
        </div>
    )
        
}
export default Product