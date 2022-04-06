import React from 'react'
import frame from '../../assets/wave_frame_golden.png'
import video from '../../assets/vedo.mp4'
const VideoSection = () =>{
    return(
       <div className='video-container'>
           <div className='shade frame' style={{ backgroundColor: 'transparent', opacity: 1, zIndex: 1}}>
            <img src={frame} style={{width: '100%', height: '100%'}} alt='frame' />
           </div>
       <video muted autoPlay loop className='app-video'>
           <source src={video}></source>
       </video>
       </div>
    )
}
export default VideoSection