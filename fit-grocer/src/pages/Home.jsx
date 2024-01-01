import React from 'react'
import Header from '../components/Home/Header'
import Categories from '../components/Home/Categories'
import RecommendedItems from '../components/Home/RecommendedItems'
import { useProductStore } from '../stores/productStore'

const Home = () => {
   const products = useProductStore((state) => state.products)

   return (
      <>
         <Header />
         <Categories />
         <RecommendedItems products={products} />
      </>
   )
}

export default Home

