import './mirindaBottom.css'
import mirindaOrange from '../assets/homePage/mirinda-orange.png'
import mirindagreen from '../assets/homePage/mirinda-green.png'
import mirindapurple from '../assets/homePage/Mirinda-Cream-Soda-Blueberry-removebg-preview.png'
const MirindaBottom = ()=>{
    return(
        <section className='mirinda-bottom'>
            <div className='mirinda-bottom-head'></div>
            <div className='header'>
                <div className='header-text'>
                    <h1>MIRINDA</h1>
                    <h1>Enjoy the summertime with intensely fruity taste</h1>
                    <div className='mirinda-item'>
                        <div>
                            <img src={mirindaOrange} className='img-mirinda'></img>
                        </div>
                        <div>
                            <img src={mirindagreen} className='img-mirinda'></img>
                        </div>
                        <div>
                        <img src={mirindapurple} className='img-mirinda'></img>
                        </div>
                     </div>
                </div>
            </div>
            
        </section>
    )
}

export default MirindaBottom