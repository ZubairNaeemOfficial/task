import { Link, useLocation } from 'react-router-dom'
import { cn } from '../../lib/utils'

export const SidebarItem = ({ icon: Icon, solidIcon: SolidIcon, text, expanded, href }) => {

   const location = useLocation();
   const path = location.pathname;
   const isActive = path === href;

   return (
      <Link to={href}>
         <li
            className={
               cn(`group relative flex items-center justify-center p-2 my-1 text-muted font-medium rounded-full cursor-pointer`,
                  isActive ? 'text-primary' : 'hover:bg-primary/10'
               )}
         >
            {
               isActive ? <SolidIcon /> : <Icon />
            }
            <span className={cn(`overflow-hidden transition-all`, expanded ? 'w-28 xl:w-52 ml-3' : 'w-0')}>
               {text}
            </span>
         </li>
      </Link>
   );
};