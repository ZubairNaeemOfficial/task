import React from 'react'
import { useProductStore } from '../../stores/productStore'

const CartItemCard = ({ productId, price, quantity }) => {
   const products = useProductStore((state) => state.products)
   const selectedProduct = products?.find(product => product.id == productId)
   const { name, img } = selectedProduct || {}

   return (
      <div className="bg-card p-[10px] pr-6 flex gap-6 rounded-lg">
         {/* Card Img */}
         <div className='object-cover aspect-square w-[92px] h-[92px] '>
            <img src={img} alt="potato" className='rounded-[15px] aspect-square object-cover' />
         </div>
         {/* Card Content */}
         <div className='text-sm font-medium flex flex-col flex-grow justify-between pt-1'>
            <p className='leading-5 line-clamp-3'>{name}</p>
            <div className='flex items-center justify-between'>
               <p className='font-normal text-muted'>Quantity {quantity}</p>
               <p><span className='text-primary'>$ </span>{price || 0}</p>
            </div>
         </div>
      </div>
   )
}

export default CartItemCard