import HomeIcon from '../assets/images/home-linear.svg?react'
import HomeIconSolid from '../assets/images/home-solid.svg?react'
import HeartIcon from '../assets/images/heart-linear.svg?react'
import HeartIconSolid from '../assets/images/heart-solid.svg?react'
import CartIcon from '../assets/images/cart.svg?react'
import DiagramIcon from '../assets/images/diagram-linear.svg?react'
import DiagramIconSolid from '../assets/images/diagram-solid.svg?react'
import ProfileIcon from '../assets/images/profile-circle-linear.svg?react'
import ProfileIconSolid from '../assets/images/profile-circle-solid.svg?react'

const NavItems = [
   {
      text: 'Dashboard',
      icon: HomeIcon,
      solidIcon: HomeIconSolid,
      href: '/'
   },
   {
      text: 'Favourites',
      icon: HeartIcon,
      solidIcon: HeartIconSolid,
      href: '/favourites'
   },
   {
      text: 'Cart',
      icon: CartIcon,
      solidIcon: CartIcon,
      href: '/cart'
   },
   {
      text: 'Tracking',
      icon: DiagramIcon,
      solidIcon: DiagramIconSolid,
      href: '/tracking'
   },
   {
      text: 'Profile',
      icon: ProfileIcon,
      solidIcon: ProfileIconSolid,
      href: '/profile'
   },
]
export default NavItems