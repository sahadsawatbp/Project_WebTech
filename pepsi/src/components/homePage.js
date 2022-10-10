import Navbar from './navbar';
import React from 'react';
import Nitro from './nitro';
import './homePage.css'
import Pourstep from './pourstep.tsx';
import SectionVideo from './video';
import SectionCoke from './coke';
function Homepage () {

    return (
        <div>
            <Navbar></Navbar>
            <section className='product-section'>
                <div className='product-promot'></div>
                <div className='product-soda'></div>
                <div className='product-cherry'></div>
            </section>
            <Nitro></Nitro>
            <Pourstep></Pourstep>
            <SectionVideo></SectionVideo>
            <SectionCoke></SectionCoke>

        </div>
    )
}
export default Homepage;