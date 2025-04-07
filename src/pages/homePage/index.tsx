import { useGSAP } from '@gsap/react'
import { HeroSection } from '../../components/HeroSection'
import { Navbar } from '../../components/Navbar'
import { ValuesSection } from '../../components/ValuesSection'
import css from './index.module.scss'
import cn from 'classnames'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { OrderSection } from '../../components/OrderSection'
import Lenis from 'lenis'
import { useEffect } from 'react'

export const HomePage = () => {
  // gsap.registerPlugin(ScrollTrigger);

  // useGSAP(() => {

  //   // Анимация ValuesSection
  //   gsap.fromTo(".valuesSection", {
  //     y: "0%", // Начальная позиция ниже экрана
  //   }, {
  //     scrollTrigger: {
  //       trigger: ".valuesSection",
  //       start: "top bottom",
  //       end: "+=400",
  //       scrub: 1,
  //     },
  //     y: "-100%", // Конечная позиция
  //     ease: 'easy',
  //   });

  //   gsap.fromTo(".valuesSection", {
  //     y: "0%", // Начальная позиция ниже экрана
  //   }, {
  //     scrollTrigger: {
  //       trigger: ".orderSection",
  //       start: "top bottom",
  //       end: "+=400",
  //       scrub: 1,
  //     },
  //     y: "-100%", // Конечная позиция
  //     ease: 'easy',
  //   });
  // });

  useEffect( () => {

    const lenis = new Lenis()



    function raf(time: any) {

      lenis.raf(time)

      requestAnimationFrame(raf)

    }



    requestAnimationFrame(raf)

  }, [])

  useGSAP(() => {
    gsap.to('.loading', {
      y: '-100%',
      duration: .5
    })
  })

  return (
    <div className={cn(css.home)}>
      <div
      className={cn(css.loading, "loading")}
      ></div>
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
