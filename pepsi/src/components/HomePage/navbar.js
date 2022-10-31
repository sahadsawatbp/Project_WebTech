import pepsiLogo from '../assets/homePage/pepsiLogo.png'
import {Link} from "react-router-dom";
import './navbar.css'
const Navbar = () =>{
    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <div className="navbar-item">
                        <img src={pepsiLogo} alt=""/>
                    </div>
                </Link>
                <Link to="/product"><div className='navbar-item' style={{"padding-left":'40px'}} >view product</div></Link>
                <div className='navbar-item'>what's new</div>
                <div className='navbar-item'>newsletter</div>
                <div className='navbar-item'>contact us</div>
            </div>
            <div className="navbar-right">
              <Link to="/purches"><div className='navbar-item'>buy pepsi products</div></Link>
            </div>
        </div>
    )
}
export default Navbar