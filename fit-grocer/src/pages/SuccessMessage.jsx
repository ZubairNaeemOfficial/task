import React from 'react'
import BackIcon from '../assets/images/arrow-left.svg?react'
import Button from '../components/ui/button'
import RiderImg from '../assets/images/rider.png'
import { Link } from 'react-router-dom'

const SuccessMessage = () => {
   return (
      <div className='flex flex-col min-h-screen pt-12 pb-6 px-7 xl:max-w-[1200px] mx-auto'>
         <div className='relative mb-7'>
            <Link to="/">
               <BackIcon className='inline' />
            </Link>
            <h1 className='absolute text-2xl font-semibold top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>Checkout</h1>
         </div>

         {/* Page Content*/}
         <div className='flex flex-col items-center justify-between flex-grow gap-3 mb-8'>
            <h1 className='mb-2 text-2xl font-semibold leading-9 text-center'>"Congratulations! Your   Order Has Been Placed!"</h1>
            <div>
               <img src={RiderImg} alt="rider png" />
            </div>
            <p className='text-center text-muted'>Thank you for choosing our services! Your order has been successfully placed and is now being processed. We appreciate your trust in us and look forward to serving you.</p>
         </div>

         {/* Checkout button */}
         <div className='flex items-center justify-center'>
            <Link to="/">
               <Button>
                  Return Home
               </Button>
            </Link>
         </div>

      </div>
   )
}

export default SuccessMessage