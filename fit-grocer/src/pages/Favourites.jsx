import React from 'react'
import BackIcon from '../assets/images/arrow-left.svg?react'
import { Link } from 'react-router-dom'
import FavouriteItem from '../components/Favourite/FavouriteItem'
import { useProductStore } from '../stores/productStore'

const Favourites = () => {
   const products = useProductStore((state) => state.products)
   const favouriteProducts = products?.filter(product => product.isFavourite)

   return (
      <div className='flex flex-col'>
         <div className='relative mb-7'>
            <Link to='/' >
               <BackIcon className='inline' />
            </Link>
            <h1 className='absolute text-2xl font-semibold top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>Favourites</h1>
         </div>

         {/* All Cart Items */}
         <div className='flex-grow mb-8 space-y-5'>
            {
               favouriteProducts?.map(({ id, price, name, img }) => (
                  <FavouriteItem key={id} id={id} price={price} name={name} img={img} />
               ))
            }
         </div>

      </div>
   )
}

export default Favourites