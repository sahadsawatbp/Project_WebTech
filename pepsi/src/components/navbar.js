import pepsiLogo from './assets/homePage/pepsiLogo.png'
import './navbar.css'
const Navbar = () =>{
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="navbar-item">
                    <img src={pepsiLogo}/>
                </div>
                <div className='navbar-item' style={{"padding-left":'40px'}} >view product</div>
                <div className='navbar-item'>what's new</div>
                <div className='navbar-item'>newsletter</div>
                <div className='navbar-item'>contact us</div>
            </div>
            <div className="navbar-right">
               <div className='navbar-item'>buy pepsi products</div>
            </div>
        </div>
    )
}
export default Navbar