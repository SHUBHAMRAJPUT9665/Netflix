import React from 'react'
import {useNavigate} from 'react-router-dom'

function Video() {

    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/Main')
    }, 4000);
  return (
    <div >
      <video autoPlay muted loop id="background-video " className='w-full h-full'>
        <source src="src\assets\animation.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Video
