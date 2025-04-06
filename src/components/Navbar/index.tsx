import { Heart, Search, ShoppingCart } from 'lucide-react'
import css from './index.module.scss'

export const Navbar = () => {
  return (
    <nav className={css.navbar}>
      <span className={css.logo}>Rabbit</span>
      <ul className={css.navItems}>
        <li className={css.link}>
          <a href="#" >home</a>
        </li>
        <li className={css.link}>
          <a href="#" >about</a>
        </li>
        <li className={css.link}>
          <a href="#" >store</a>
        </li>
      </ul>
      <div className={css.icons}>
        <Heart color="black" size={25}/>
        <Search color="black" size={25} />
        <ShoppingCart color="black" size={25} />
      </div>
    </nav>
  )
}
