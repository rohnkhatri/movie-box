import React from 'react';
import loader from '../../../public/loader.gif'

const Loading = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-black'>
        <img className='h-[60%] object-cover' src={loader} alt="Loading..." />
    </div>
  )
}

export default Loading