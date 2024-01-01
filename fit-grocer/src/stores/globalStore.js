import { create } from 'zustand'
import { userData } from '../Data/MockupData'

export const useGlobalStore = create((set) => ({
   isMobile: false,
   setIsMobile: (isMobile) => set({ isMobile }),

   order: {
      total: 0,
      items: [],
   },
   setOrder: (order) => set({ order }),
   resetOrder: () => set({ order: { total: 0, items: [] } }),

   userInfo: {},
   setUserInfo: (userInfo) => set({ userInfo }),
   fetchUserInfo: async () => {
      const fetchedUserInfo = userData;
      set({ userInfo: fetchedUserInfo });
   },

   init: async () => {
      await useGlobalStore.getState().fetchUserInfo();
   },
}))

useGlobalStore.getState().init();