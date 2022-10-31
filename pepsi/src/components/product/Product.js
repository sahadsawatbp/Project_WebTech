import { Link} from "react-router-dom";
import "./Product.css"
const Product = ({name,img_product,background_color,id,page}) =>{
    const design = background_color
    const delay = id/20
    const delay_p = id/12
    return (
            <Link to={page} className="product-item">
                    <p id="tooltip" ><strong>{name}</strong></p>
                    <div className="background-color" style={{background:design}}></div>
                    <p style={{animationDuration: `${delay_p}s`}}><strong>{name}</strong></p>
                    <img src={img_product} alt="" style={{animationDuration: `${delay}s`}}/>
            </Link>
    )
        
}
export default Product