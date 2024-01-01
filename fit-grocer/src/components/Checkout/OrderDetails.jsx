import React from 'react'
import { useGlobalStore } from '../../stores/globalStore'
import { useProductStore } from '../../stores/productStore'

const OrderDetails = () => {

   const products = useProductStore((state) => state.products)

   const order = useGlobalStore((state) => state.order)

   const items = order?.items?.map(item => `${item.quantity}x ${products?.find(product => product.id == item.productId)?.shortName}`)

   const mid = Math.ceil(items.length / 2);
   const firstColumnItems = items.slice(0, mid);
   const secondColumnItems = items.slice(mid);

   return (
      <div>
         <h2 className='mb-4 text-2xl font-semibold'>Order details</h2>
         <div className="flex gap-6 text-muted">
            <div>
               {
                  firstColumnItems.map((item, index) => (
                     <p key={index}>{item}</p>
                  ))
               }
            </div>
            <div>
               {
                  secondColumnItems.map((item, index) => (
                     <p key={index}>{item}</p>
                  ))
               }
            </div>
         </div>
      </div>
   )
}

export default OrderDetails