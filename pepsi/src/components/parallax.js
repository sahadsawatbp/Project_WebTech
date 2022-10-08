import {Parallax, ParallaxLayer ,IParallax} from '@react-spring/parallax'
import {useRef} from 'react'
import fanta from './assets/homePage/fanta.png'
import React from 'react'
const Myparallax = ()=>{
   return(
        <div>
            <Parallax pages={3} horizontal>
                <ParallaxLayer>
                    <h1>kuay</h1>
                </ParallaxLayer>
                <ParallaxLayer></ParallaxLayer>
                        <h1>kuay</h1>
                <ParallaxLayer>
                    <h1>kuat</h1>
                </ParallaxLayer>    
            </Parallax>
        </div>
   )
}
export default Myparallax