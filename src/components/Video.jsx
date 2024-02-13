import React from 'react'
import {useNavigate} from 'react-router-dom'

function Video() {

    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/Main')
    }, 4000);
  return (
    <div className='w-full h-au max-w-full max-h-full'>
    <video autoPlay muted loop id="background-video " className='w-full h-full '>
      <source src="src\assets\animation.mp4" type="video/mp4" />
    </video>
  </div>

  )
}

export default Video
