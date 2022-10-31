import Navbar from './navbar';
import React from 'react';
import Nitro from './nitro';
import './homePage.css'
import Pourstep from './pourstep.tsx';
import SectionVideo from './video';
import SectionCoke from './coke';
import Schwepp from './schwepp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Homepage () {

    return (
        <div>
            <Navbar/>
            <section className='product-section'>
                <div className='product-promot'></div>
                <div className='product-soda'></div>
                <div className='product-cherry'></div>
            </section>
            <section>
                <Nitro/>
            </section>
            <Schwepp/>
            <SectionCoke/>
            <SectionVideo/>
            <Pourstep/>

        </div>
    )
}
export default Homepage;