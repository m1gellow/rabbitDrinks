import css from './index.module.scss'
import drink from '../../../public/drink.png'
import { Star } from 'lucide-react'

export const HeroSection = () => {
  return (
    <section className={css.hero}>
        <img src={drink} alt="drink" className={css.bgImg}/>
      <span className={css.tagline}>Healthy</span>

      <h2 className={css.storeName}>
        <span>The</span> Rabbit Store
      </h2>
      <h1 className={css.title}><span><Star color='black'/></span>Drinks and Delivery <span><Star color='black'/></span></h1>

      <p className={css.description}>made with attention to details</p>
      {/* Button */}
      <a className={css.heroButton} href='#'>Order <span>now</span></a>
      {/* Special */}
    </section>
  )
}
