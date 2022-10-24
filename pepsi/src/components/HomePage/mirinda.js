import './mirinda.css'
import MirindaBottom from './mirindaBottom'
import Fanta from './fanta'
import video from '../assets/video/videoplayback_1.mp4'
const Mirinda = () =>{
    return(
        <div class="mirinda=">
            <div className="video">
                <video  src={video} controls></video>
            </div>
            <MirindaBottom></MirindaBottom>
            <Fanta></Fanta>
        </div>
    )
}
export default Mirinda