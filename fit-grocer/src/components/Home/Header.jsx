import React from 'react'
import HandWave from '../../assets/images/hand-wave.svg?react'
import SearchIcon from '../../assets/images/search-icon.svg?react'
import CartIcon from '../../assets/images/cart-black.svg?react'
import { calculateCurrentMeal } from '../../lib/utils'
import { useGlobalStore } from '../../stores/globalStore'
import {
   Sheet,
   SheetContent,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "../../components/ui/sheet"
import CartItemCard from '../Cart/CartItemCard'
import Button from '../ui/button'
import { Link } from 'react-router-dom'

const Header = () => {
   const currentMeal = calculateCurrentMeal()
   const userInfo = useGlobalStore((state) => state.userInfo)
   const isMobile = useGlobalStore((state) => state.isMobile)
   const order = useGlobalStore((state) => state.order)

   return (
      <div className='flex justify-between'>
         <div>
            <h1 className='flex items-center gap-2 text-2xl font-semibold'>
               Hey {userInfo?.name}
               <HandWave />
            </h1>
            <p className='text-sm'>{`It’s ${currentMeal} time!`}</p>
         </div>
         <div className='flex items-center gap-4'>
            <SearchIcon />
            {
               !isMobile && (
                  <Sheet>
                     <SheetTrigger><CartIcon /></SheetTrigger>
                     <SheetContent>
                        <SheetHeader>
                           <SheetTitle>My Bucket</SheetTitle>
                        </SheetHeader>
                        <div className='flex flex-col' >
                           <div className='flex-grow mb-6 mt-4 space-y-5 overflow-y-auto' style={{ height: 'calc(100svh - 180px)' }}>
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
                     </SheetContent>
                  </Sheet>
               )
            }
         </div>
      </div>
   )
}

export default Header