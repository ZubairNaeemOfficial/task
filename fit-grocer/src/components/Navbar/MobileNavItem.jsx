import { Link, useLocation } from 'react-router-dom'
import { cn } from '../../lib/utils'

export const MobileNavItem = ({ icon: Icon, solidIcon: SolidIcon, href }) => {

   const location = useLocation();
   const path = location.pathname;
   const isActive = path === href;

   return (
      <Link to={href}>
         <div className={cn(href === '/cart' ? 'bg-black h-[52px] w-[52px] flex items-center justify-center rounded-full' : '')}>
            {isActive ? <SolidIcon /> : <Icon />}
         </div>
      </Link>
   );
};