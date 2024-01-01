import React, { useState } from 'react'
import { cn } from '../../lib/utils'
import { ChevronFirst, MoreVertical, ChevronLast } from 'lucide-react'
import { SidebarItem } from './SidebarItem'
import { MobileNavItem } from './MobileNavItem'
import { useGlobalStore } from '../../stores/globalStore'
import NavItems from '../../Data/NavData'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
   DropdownMenuItem
} from "../ui/dropdown-menu"

const Navbar = () => {
   const [expanded, setExpanded] = useState(true)
   const isMobile = useGlobalStore((state) => state.isMobile)
   const userInfo = useGlobalStore((state) => state.userInfo)

   return (
      <>
         {!isMobile ?
            (
               <aside className='sticky top-0 h-screen'>
                  <nav className='flex flex-col h-full bg-white border-r shadow-md'>
                     {/* Toggle */}
                     <div className={cn('flex items-center justify-end p-4 pb-2', !expanded && 'justify-center')}>
                        <button
                           className='p-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary'
                           onClick={() => setExpanded(curr => !curr)}
                        >
                           {expanded ? <ChevronFirst /> : <ChevronLast />}
                        </button>
                     </div>
                     {/* Ul */}
                     <ul className='flex-1 px-3 mt-5'>
                        {NavItems?.map(({ text, icon, solidIcon, href }) => {
                           return (
                              <React.Fragment key={text}>
                                 {
                                    href === '/cart' ? null : <SidebarItem text={text} icon={icon} solidIcon={solidIcon} expanded={expanded} href={href} />
                                 }
                              </React.Fragment>
                           );
                        })}
                     </ul>
                     {/* User Avatar */}
                     <div className={cn('flex items-center p-3 border-t', !expanded && 'justify-center')}>
                        <img
                           src={`https://ui-avatars.com/api/?background=ffb6a0&color=ff4b15&bold=true&name=${userInfo?.name}`}
                           alt=""
                           className={cn('w-10 h-10 rounded-md xl:block', expanded && 'hidden')}
                        />
                        <div className={cn(`flex justify-between overflow-hidden transition-all items-center`, expanded ? 'w-40 xl:w-52 ml-3' : 'w-0')}>
                           <div className='leading-4'>
                              <h4 className='font-bold'>{userInfo?.name}</h4>
                              <span className='text-sm text-gray-600'>{userInfo?.email}</span>
                           </div>
                           {/* DropDownMenu */}
                           <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                 <MoreVertical size={20} className='cursor-pointer' />
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="w-56">
                                 <DropdownMenuLabel>Settings</DropdownMenuLabel>
                                 <DropdownMenuSeparator />
                                 <DropdownMenuItem>
                                    Logout
                                 </DropdownMenuItem>
                              </DropdownMenuContent>
                           </DropdownMenu>
                        </div>
                     </div>
                  </nav>
               </aside>
            )
            :
            (
               <nav className='fixed bottom-0 left-0 w-screen py-4 bg-foreground px-7 z-50'>
                  <div className='flex items-center justify-between'>
                     {
                        NavItems?.map(({ icon, solidIcon, href }, index) => {
                           return (
                              <React.Fragment key={index}>
                                 <MobileNavItem icon={icon} solidIcon={solidIcon} href={href} />
                              </React.Fragment>
                           );
                        })
                     }
                  </div>
               </nav>
            )
         }

      </>
   )
}

export default Navbar;