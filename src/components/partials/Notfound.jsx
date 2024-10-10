import React from 'react';
import not_found from '../../../public/404_not_found.gif'

const Notfound = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-black'>
        <img className='h-[60%] object-cover' src={not_found} alt="Loading..." />
    </div>
  )
}

export default Notfound