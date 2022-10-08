import './nitro.css'
import nitroimg from './assets/homePage/nitro.png'
import nitrologo from './assets/homePage/Nitro_Logo.png'
const Nitro = ()=>{
    return(
        <div className='container'>
            <div className='container-item'>
                <img src={nitroimg} style={{width: "500px"}}/>
            </div>
            <div className='container-item container-item-column'>
                <img src={nitrologo} style={{width: "450px", height: "300px"}}></img>
                <div className='container-text'>SMOOTH, CREAMY, DELICIOUS</div>
                <div className='container-button'>LEARN MORE</div>
            </div>
        </div>
    )
}

export default Nitro