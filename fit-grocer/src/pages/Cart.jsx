import React from 'react'
import BackIcon from '../assets/images/arrow-left.svg?react'
import CartItemCard from '../components/Cart/CartItemCard'
import Button from '../components/ui/button'
import { Link } from 'react-router-dom'
import { useGlobalStore } from '../stores/globalStore'

const Cart = () => {

   const order = useGlobalStore((state) => state.order)

   return (
      <div className='flex flex-col min-h-screen pt-12 pb-6 px-7'>
         <div className='relative mb-7'>
            <Link to='/' >
               <BackIcon className='inline' />
            </Link>
            <h1 className='absolute text-2xl font-semibold top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>My Bucket</h1>
         </div>

         {/* All Cart Items */}
         <div className='flex-grow mb-8 space-y-5'>
            {
               order?.items?.map(({ id, productId, price, quantity }) => (
                  <CartItemCard key={id} productId={productId} price={price} quantity={quantity} />
               ))
            }
         </div>

         {/* Checkout button */}
         <div className='flex items-center justify-between'>
            <span className='font-inter'>
               <p className='text-[#434141] text-lg'>Total</p>
               <h3 className='text-3xl'>{order.total} <span className='text-primary'>$</span></h3>
            </span>
            <Link to='/checkout'>
               <Button disabled={order.items.length === 0}>
                  Checkout
               </Button>
            </Link>
         </div>

      </div>
   )
}

export default Cart