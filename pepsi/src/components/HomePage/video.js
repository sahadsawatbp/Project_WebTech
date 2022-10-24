import video from '../assets/video/videoplayback_1.mp4'

const SectionVideo = () =>{
    return (
        <div className='Sectionvideo'>
            <video autoPlay loop controls muted
            style={{width: "100%", height: "900px"}}
            >
                <source src={video}></source>
            </video>
        </div>
    )
}
export default SectionVideo