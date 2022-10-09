import './mirindaBottom.css'
import mirindaOrange from './assets/homePage/mirinda-orange.png'
const MirindaBottom = ()=>{
    return(
        <section className='mirinda-bottom'>
            <div className='mirinda-bottom-head'></div>
            <div className='header'>
                <div className='header-text'>
                    <h1>MIRINDA</h1>
                    <h1>Enjoy the summertime with intensely fruity taste</h1>
                    <div className='mirinda-item'>
                        <img src={mirindaOrange} className='img-mirinda'></img>
                        <img src={mirindaOrange} className='img-mirinda'></img>

                     </div>
                </div>
            </div>
            
        </section>
    )
}

export default MirindaBottom