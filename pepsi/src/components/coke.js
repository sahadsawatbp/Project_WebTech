import cokeimg from './assets/homePage/Coke_Custom_Bottles.png'
import './coke.css'
const SectionCoke = ()=>{
    return (
        <section className="coke-product">
            <div className="coke-header"></div>
            <div className="coke-item">
                <img src={cokeimg}></img>
                <div  className='coke-text'>
                    <h3>Coca-Cola Store</h3>
                    <h1 className='coke-text-long' style={{whiteSpace: 'pre-wrap'}}>Create Memories<br></br>With<br></br>Custom<br></br>Bottles.</h1>
                    <p>Whether you're celebrating a birthday, watching the big game, or toasting the newlyweds, custom bottles make the occasion special.</p>
                    <div className='coke-btn-fake'>
                        SHOP NOW
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SectionCoke