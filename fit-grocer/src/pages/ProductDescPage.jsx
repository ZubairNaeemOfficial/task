import React, { useEffect, useState } from 'react'
import BackIcon from '../assets/images/arrow-left.svg?react'
import Heart from '../assets/images/prod-desc-heart.svg?react'
import HeartSolid from '../assets/images/prod-desc-heart-active.svg?react'
import RatingIcon from '../assets/images/Star.svg?react'
import Button from '../components/ui/button'
import { Link, useParams } from 'react-router-dom'
import { useProductStore } from '../stores/productStore'
import { useGlobalStore } from '../stores/globalStore'
import toast from 'react-hot-toast'

const ProductDescPage = () => {
   const toggleFavourite = useProductStore((state) => state.toggleFavourite)
   const products = useProductStore((state) => state.products)
   const { id } = useParams()

   const order = useGlobalStore((state) => state.order)
   const setOrder = useGlobalStore((state) => state.setOrder)

   const selectedProduct = products?.find(product => product.id == id)
   const { name, restaurant, rating, description, closeUpImg, price, isFavourite } = selectedProduct || {}

   const [quantity, setQuantity] = useState(1)
   const [calculatedPrice, setCalculatedPrice] = useState(price)

   const addToCart = async () => {
      await setOrder({
         total: (+order.total + +calculatedPrice).toFixed(2),
         items: [
            ...order.items,
            {
               id: new Date().getTime(),
               productId: +id,
               price: +calculatedPrice,
               quantity: quantity
            }
         ]
      })
      toast.success('Successfully added to cart')
   }

   const increment = () => {
      setQuantity((prev) => prev + 1)
   }
   const decrement = () => {
      if (quantity > 1) {
         setQuantity((prev) => prev - 1)
      }
   }

   const handleFavourite = () => {
      toggleFavourite(+id)
   }

   useEffect(() => {
      setCalculatedPrice((quantity * price).toFixed(2))
   }, [quantity])


   return (
      <div className='min-h-screen'>
         <div className='bg-foreground pt-12 pb-6 mb-8 xl:mb-20 rounded-b-[50px]'>
            {/* Header */}
            <div className='flex items-center justify-between pb-8 px-7 xl:max-w-[1200px] mx-auto'>
               <Link to='/'>
                  <BackIcon className='inline' />
               </Link>
               {isFavourite ? <HeartSolid onClick={handleFavourite} className="cursor-pointer" /> : <Heart onClick={handleFavourite} className="cursor-pointer" />}
            </div>

            {/* Product Info */}
            <div className='px-7 xl:max-w-[1200px] mx-auto'>
               <h1 className='text-2xl font-semibold leading-9'>{name}</h1>
               <h3 className='mt-2 mb-3 text-lg text-muted'>By {restaurant}</h3>
               <p className='flex gap-1.5'><RatingIcon />{rating}</p>
            </div>

            {/* Product Image and Quantity*/}
            <div className='flex items-center pl-7 xl:max-w-[1200px] mx-auto'>
               <div className='basis-[30%] flex-shrink-0'>
                  <div className='flex flex-col xl:flex-row-reverse xl:items-center xl:justify-end'>
                     <button className='w-10 h-10 text-3xl border rounded-full border-primary text-primary' onClick={increment}>+</button>
                     <span className='py-2.5 pl-3 xl:pr-3 text-3xl font-inter'>{quantity}</span>
                     <button className='w-10 h-10 text-3xl border rounded-full border-primary text-primary' onClick={decrement}>-</button>
                  </div>
               </div>
               <div className='flex-grow h-[350px] bg-no-repeat drop-shadow-2xl' style={{ backgroundImage: `url(${closeUpImg})`, backgroundSize: '350px', }}>
               </div>
            </div>

            {/* Product Description */}
            <div className='mt-2 px-7 xl:max-w-[1200px] mx-auto'>
               <h3 className='mb-1 text-lg font-semibold'>Description</h3>
               <p className='text-muted'>{description}</p>
            </div>
         </div>

         {/* Add to cart button */}
         <div className='flex items-center justify-between pb-4 px-7 xl:max-w-[1200px] mx-auto'>
            <span className='font-inter'>
               <p className='text-[#434141] text-lg'>Price</p>
               <h3 className='text-3xl'>{calculatedPrice} <span className='text-primary'>$</span></h3>
            </span>
            <Button onClick={addToCart}>
               Add to cart
            </Button>
         </div>
      </div>
   )
}

export default ProductDescPage