import { ProductCard } from '../ProductCard'
import css from './index.module.scss'

const products = [
  {
    name: 'Vice drink',
    description: 'Drink with alcholol for team',
    buttonText: 'Order now',
  },

  {
    name: 'Vice drink',
    description: 'Drink with alcholol for team',
    buttonText: 'Order now',
  },
  {
    name: 'Vice drink',
    description: 'Drink with alcholol for team',
    buttonText: 'Order now',
  },
  {
    name: 'Vice drink',
    description: 'Drink with alcholol for team',
    buttonText: 'Order now',
  },
]

export const OrderSection = () => {
  return (
    <div className={css.orderSection}>
      <h1 className={css.logo}>Rabbit</h1>
      <div className={css.text}>
        <h2 className={css.title}>
          Say <span> hello </span>to Drinks
        </h2>
        <p className={css.description}>just order, we'll deliver</p>
      </div>
      <div className={css.productsList}>
        {products.map((product) => (
          <ProductCard />
        ))}
      </div>
    </div>
  )
}
