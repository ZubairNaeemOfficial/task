import React from 'react'
import { Link } from 'react-router-dom'
import BackIcon from '../assets/images/arrow-left.svg?react'
const Tracking = () => {
   return (
      <div className='flex flex-col'>
         <div className='relative mb-7'>
            <Link to='/' >
               <BackIcon className='inline' />
            </Link>
            <h1 className='absolute text-2xl font-semibold top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>Tracking</h1>
         </div>
      </div>
   )
}

export default Tracking