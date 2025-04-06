import { HeroSection } from '../../components/HeroSection'
import { Navbar } from '../../components/Navbar'
import css from './index.module.scss'


export const HomePage = () => {
  return (
    <div className={css.home}>
      <header className={css.header}>
        <Navbar/>
        <HeroSection/>
        {/* Button */}
        {/* Special */}
      </header>
    </div>
  )
}
