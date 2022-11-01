import Navbar from "../../HomePage/navbar"
import Item from "../products.json"
import "./ProductStyle.css"
import { Link } from "react-router-dom"
const Product1 = () =>{
    
    return(
            <div className="detail-body">
                <div className="detail-background" style={{backgroundColor:Item[0].background_color}}></div>
                <div className="product-navbar"><Navbar /></div>
                <Link className="previousPage" to="/product/product_39"></Link>
                <Link className="nextPage" to="/product/product_2"></Link>
                <div className="detail-container">
                    <div className="detail-box">
                        <div className="inside-box">
                            <h1>{Item[0].name}</h1>
                            <h3>NUTRITION FACTS</h3>
                            <p>Serving Size {Item[0].nutrition_facts.serving_size[0]} ({Item[0].nutrition_facts.serving_size[1]})</p>
                            <p>Servings Per Container {Item[0].nutrition_facts.servings_per_container[0]}</p>
                            <p style={{marginTop:"10px", borderTop:"1px solid black"}}>Amount per Serving</p>
                            <p style={{borderBottom:"5px solid black"}}>Calories {Item[0].nutrition_facts.calories}</p>
                            <p style={{textAlign:"right"}}>% Daily Value *</p>
                            <p>Total fat {Item[0].nutrition_facts.daily_value.fat[0]}<sppan style={{float:"right"}}>{Item[0].nutrition_facts.daily_value.fat[1]}</sppan></p>
                            <p>Sodium {Item[0].nutrition_facts.daily_value.sodium[0]}<sppan style={{float:"right"}}>{Item[0].nutrition_facts.daily_value.sodium[1]}</sppan></p>
                            <p>Total Carbohydrate {Item[0].nutrition_facts.daily_value.carbohydrate[0]}<sppan style={{float:"right"}}>{Item[0].nutrition_facts.daily_value.carbohydrate[1]}</sppan></p>
                            <p>Sugars {Item[0].nutrition_facts.daily_value.sugars}</p>
                            <p style={{borderBottom:"5px solid black"}}>Protein {Item[0].nutrition_facts.daily_value.protein}</p>
                            <p>Not a significant source of other nutrients.</p>
                            <p>*Percent Daily Values are based on a 2,000 calorie diet.</p>
                        </div>
                        <div className="navbar-right">
                                <Link to="/purches"><div className='navbar-item'>Buy now</div></Link>
                        </div>
                    </div>
                    <img src={`../${Item[0].img_product}`} alt=""/>
                </div>
            </div>
    )
}
export default Product1