import { create } from 'zustand'
import { allProducts, allCategories } from '../Data/MockupData'

export const useProductStore = create((set) => ({
   // All Products
   products: [],
   setProducts: (product) => set({ product }),
   toggleFavourite: (productId) => {
      set((state) => {
         const updatedProducts = state.products.map((product) =>
            product.id === productId ? { ...product, isFavourite: !product.isFavourite } : product
         );
         console.log("toggled favourite");
         return { products: updatedProducts };
      });
   },
   fetchProducts: async () => {
      const fetchedProducts = allProducts;
      set({ products: fetchedProducts });
   },

   // All Categories
   categories: [],
   setCategories: (categories) => set({ categories }),
   fetchCategories: async () => {
      const fetchedCategories = allCategories;
      set({ categories: fetchedCategories });
   },

   init: async () => {
      await useProductStore.getState().fetchProducts();
      await useProductStore.getState().fetchCategories();
   },
}))

useProductStore.getState().init();