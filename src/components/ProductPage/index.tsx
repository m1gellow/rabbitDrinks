import { Link } from 'react-router-dom'
import css from './index.module.scss'

export const ProductPage = () => {

    return (
        <div className={css.productPage}>
         <Link className={css.logo} to={'/'}>Rabbit</Link>
        <div className={css.text}>
          <h2 className={css.title}>
          Here is your <span> drink </span>
          </h2>
          <p className={css.description}>a few minutes and take pleasure</p>
        </div>
        <div className={css.productsList}>
          
        </div>
      </div>
    )
}