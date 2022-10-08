import Navbar from './navbar';
import React from 'react';
import Nitro from './nitro';
import './homePage.css'

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
        </div>
    )
}
export default Homepage;