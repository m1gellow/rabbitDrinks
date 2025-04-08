import { useGSAP } from '@gsap/react'
import { HeroSection } from '../../components/HeroSection'
import { Navbar } from '../../components/Navbar'
import { ValuesSection } from '../../components/ValuesSection'
import css from './index.module.scss'
import cn from 'classnames'
import gsap from 'gsap'
import { OrderSection } from '../../components/OrderSection'
import Lenis from 'lenis'
import { useEffect } from 'react'

export const HomePage = () => {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)

      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  useGSAP(() => {
    gsap.to('.loading', {
      y: '-110%',
      duration: 0.5,
    })
  })

  return (
    <div className={cn(css.home)}>
      <header className={css.header}>
        <Navbar />
        <HeroSection />
      </header>
      <section className={cn(css.valuesSection, 'valuesSection')}>
        <ValuesSection />
      </section>
      <section className={cn(css.orderSection, 'orderSection')}>
        <OrderSection />
      </section>
    </div>
  )
}
