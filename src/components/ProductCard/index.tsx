import css from './index.module.scss'
import product from '../../../public/drink.png'

export const ProductCard = () => {
  return (
    <div className={css.card}>
      <img src={product} alt="" className={css.cardImage} />
      <div className={css.cardContent}>
        <h2 className={css.productTitle}>Vice drink</h2>
        <p className={css.productDescription}>Drink with alcholol for team</p>
        <button className={css.productButton}>order now</button>
      </div>
    </div>
  )
}
