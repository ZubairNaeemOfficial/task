import React from 'react'
import { useProductStore } from '../../stores/productStore'
import HeartSolid from '../../assets/images/heart-dish-active.svg?react'
import { Link } from 'react-router-dom'

const FavouriteItem = ({ id, price, name, img, }) => {
   const toggleFavourite = useProductStore((state) => state.toggleFavourite)

   const handleFavourite = (e) => {
      e.preventDefault()
      toggleFavourite(id)
   }

   return (
      <Link to={`/prod/${id}`} className='block'>
         <div className="bg-card p-[10px] pr-6 flex gap-6 rounded-lg max-w-[900px] mx-auto">
            {/* Card Img */}
            <div className='object-cover aspect-square w-[92px] h-[92px] '>
               <img src={img} alt="potato" className='rounded-[15px] aspect-square object-cover' />
            </div>
            {/* Card Content */}
            <div className='text-sm font-medium flex flex-col flex-grow justify-between pt-1'>
               <p className='leading-5 line-clamp-3'>{name}</p>
               <div className='flex items-center justify-between'>
                  <p><span className='text-primary'>$ </span>{price || 0}</p>
                  <HeartSolid onClick={handleFavourite} className='cursor-pointer' />
               </div>
            </div>
         </div>
      </Link>
   )
}

export default FavouriteItem