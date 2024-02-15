import React from 'react'

function VideoTitle({title , overview}) {
  return (
    <div className=' pt-16 px-12'>
      
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
         <button className=' bg-white text-black p-4 px-12 text-xl rounded-md'> ▶ Play</button>
         <button className='mx-2 bg-white text-black p-4 px-12 text-xl rounded-md'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
