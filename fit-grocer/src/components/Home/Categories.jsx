import React, { useEffect } from 'react'
import CategoryItem from './CategoryItem'
import useEmblaCarousel from 'embla-carousel-react'
import { useProductStore } from '../../stores/productStore'

const Categories = () => {
   const [emblaRef] = useEmblaCarousel({ containScroll: 'trimSnaps', dragFree: true })
   const categories = useProductStore((state) => state.categories)

   return (
      <div className='mt-12'>
         <div className='flex items-center justify-between font-medium'>
            <p>Categories</p>
            <p className='text-primary'>See all</p>
         </div>

         {/* Categiry Slider */}
         <div className='overflow-hidden [max-width:calc(100vw-75px)] mt-5' ref={emblaRef}>
            <div className='flex gap-4'>
               {
                  categories?.map(({ id, name, img, color }) => {
                     return (
                        <div key={id} className='flex-shrink-0 min-w-0'>
                           <CategoryItem name={name} img={img} color={color} />
                        </div>
                     )
                  })
               }
            </div>
         </div>
      </div>
   )
}

export default Categories