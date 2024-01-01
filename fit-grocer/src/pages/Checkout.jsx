import React from 'react'
import BackIcon from '../assets/images/arrow-left.svg?react'
import Button from '../components/ui/button'
import PaymentOptions from '../components/Checkout/PaymentOptions'
import DeliveryDetails from '../components/Checkout/DeliveryDetails'
import OrderDetails from '../components/Checkout/OrderDetails'
import { useGlobalStore } from '../stores/globalStore'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const Checkout = () => {

   const order = useGlobalStore((state) => state.order)
   const resetOrder = useGlobalStore((state) => state.resetOrder)

   const handlePay = () => {
      resetOrder()
      toast.success('Payment Successful')
   }

   return (
      <div className='flex flex-col min-h-screen pt-12 pb-6 px-7 xl:max-w-[1200px] mx-auto'>
         <div className='relative mb-7'>
            <Link to='/cart'>
               <BackIcon />
            </Link>
            <h1 className='absolute text-2xl font-semibold top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>Checkout</h1>
         </div>

         {/* Page Content*/}
         <div className='flex-grow mb-8 space-y-8 max-w-[500px]'>
            <PaymentOptions />
            <DeliveryDetails />
            <OrderDetails />
         </div>

         {/* Checkout button */}
         <div className='flex items-center justify-between'>
            <span className='font-inter'>
               <p className='text-[#434141] text-lg'>Total</p>
               <h3 className='text-3xl'>{order.total}<span className='text-primary'> $</span></h3>
            </span>
            <Link to={'/success'} onClick={handlePay}>
               <Button>
                  Pay Now
               </Button>
            </Link>
         </div>

      </div>
   )
}

export default Checkout